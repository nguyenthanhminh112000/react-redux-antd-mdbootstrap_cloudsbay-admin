import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getCategories } from './../../../api/category';
import { updateSub, getSub } from './../../../api/sub';
import { useHistory, useParams } from 'react-router-dom';
console.log('SubCategoryUpdateController outside');
const SubCategoryUpdateController = () => {
  console.log('SubCategoryUpdateController inside');
  // hooks
  const [sub, setSub] = useState({ name: '', parent: '' });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state);
  const history = useHistory();
  const { slug } = useParams();
  useEffect(() => {
    console.log('SubCategoryUpdateController inside useEffect');
    loadSubAndCategories();
  }, []);
  // writing functions
  const handleChangeSubName = (e) => {
    setSub({ ...sub, name: e.target.value });
  };
  const handleChangeSubParent = (e) => {
    setSub({ ...sub, parent: e.target.value });
  };
  const loadSubAndCategories = async () => {
    try {
      const { data: sub } = await getSub(slug);
      const { data: categories } = await getCategories();
      setSub(sub);
      setCategories(categories);
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      history.push('/admin/sub');
    }
  };
  const handleUpdateSub = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const categoryResponse = await updateSub(
        slug,
        { name: sub.name, parent: sub.parent },
        user.token
      );
      toast.success(`"${categoryResponse.data.name}" sub category is updated.`);
      history.push('/admin/sub');
    } catch (error) {
      setLoading(false);
      console.dir(error);
      toast.error(`${error.response.data.message}`);
    }
  };

  return (
    <>
      {console.log('SubCategoryUpdateController inside return')}
      {!loading ? (
        <h4>Update Sub Category</h4>
      ) : (
        <h4 className='text-danger'>Loading</h4>
      )}

      <div className='form-group'>
        <label htmlFor='category'>Parent Category</label>
        <select
          name='category'
          id='category'
          className='form-control'
          onChange={handleChangeSubParent}
          value={sub.parent}
        >
          <option value=''>Please select category</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <form onSubmit={handleUpdateSub}>
        <div className='form-group'>
          <label htmlFor='category-create-name'>Name</label>
          <input
            type='text'
            placeholder='Your category'
            id='category-create-name'
            className='form-control'
            value={sub.name}
            autoFocus
            required
            onChange={handleChangeSubName}
          />
          <br />
          <button
            className='btn btn-outline-primary'
            disabled={
              !(sub.name.length >= 3 && sub.name.length <= 32 && sub.parent)
            }
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default SubCategoryUpdateController;
