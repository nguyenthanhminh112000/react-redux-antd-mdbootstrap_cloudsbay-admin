import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCategories } from './../../../api/category';
import { createSub, deleteSub, getSubs } from './../../../api/sub';
console.log('SubCategoryController outside');
const SubCategoryController = () => {
  console.log('SubCategoryController inside');
  // hooks
  const [sub, setSub] = useState('');
  const [subs, setSubs] = useState([]);
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state);
  useEffect(() => {
    console.log('SubCategoryController inside useEffect');
    loadCategories();
    loadSubs();
  }, []);
  // writing functions
  const search = (keyword) => (s) =>
    s.name.toLowerCase().includes(keyword.toLowerCase());
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleChangeSub = (e) => {
    setSub(e.target.value);
  };
  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const loadCategories = async () => {
    const { data: categories } = await getCategories();
    setCategories(categories);
  };
  const loadSubs = async () => {
    const { data: subs } = await getSubs();
    setSubs(subs);
  };
  const handleCreateSub = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const subResponse = await createSub(sub, category, user.token);
      await loadSubs();
      toast.success(`"${subResponse.data.name}" sub category is created.`);
      setSub('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.dir(error);
      toast.error(`${error.response.data.message}`);
    }
  };

  const handleDeleteSub = async (slug) => {
    try {
      if (window.confirm('Delete?')) {
        setLoading(true);
        const response = await deleteSub(slug, user.token);
        await loadSubs();
        toast.success(
          `Successfully delete "${response.data.name} sub category."`
        );
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {console.log('SubCategoryController inside return')}
      {!loading ? (
        <h4>Create Sub Category</h4>
      ) : (
        <h4 className='text-danger'>Loading</h4>
      )}

      <div className='form-group'>
        <label htmlFor='category'>Parent Category</label>
        <select
          name='category'
          id='category'
          className='form-control'
          onChange={handleChangeCategory}
        >
          <option value=''>Please select category</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>
      <form onSubmit={handleCreateSub}>
        <div className='form-group'>
          <label htmlFor='sub-create-name'>Name</label>
          <input
            type='text'
            placeholder='Your Sub Category'
            id='sub-create-name'
            className='form-control'
            value={sub}
            autoFocus
            required
            onChange={handleChangeSub}
          />
          <br />
          <button
            className='btn btn-outline-primary'
            disabled={!(sub.length >= 3 && sub.length <= 32)}
          >
            Create
          </button>
        </div>
      </form>
      <input
        type='text'
        placeholder='Filter'
        value={keyword}
        onChange={handleChangeKeyword}
        className='form-control mb-4'
      />
      {subs.filter(search(keyword)).map((s) => (
        <div className='alert alert-secondary' key={s._id}>
          {s.name}

          <span
            className='btn btn-sm float-right'
            onClick={() => {
              handleDeleteSub(s.slug);
            }}
          >
            <DeleteOutlined className='text-danger' />
          </span>
          <Link to={`/admin/sub/${s.slug}`}>
            <span className='btn btn-sm float-right'>
              <EditOutlined className='text-warning' />
            </span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SubCategoryController;
