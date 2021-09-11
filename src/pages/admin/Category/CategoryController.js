import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  createCategory,
  getCategories,
  deleteCategory,
} from './../../../api/category';
console.log('CategoryController outside');
const CategoryController = () => {
  console.log('CategoryController inside');
  // hooks
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state);
  useEffect(() => {
    console.log('CategoryController inside useEffect');
    loadCategories();
  }, []);
  // writing functions
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const loadCategories = async () => {
    const { data: categories } = await getCategories();
    setCategories(categories);
  };
  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const categoryResponse = await createCategory(category, user.token);
      await loadCategories();
      toast.success(`"${categoryResponse.data.name}" is created.`);
      setCategory('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.dir(error);
      toast.error(`${error.response.data.message}`);
    }
  };

  const handleDeleteCategory = async (slug) => {
    try {
      if (window.confirm('Delete?')) {
        setLoading(true);
        const response = await deleteCategory(slug, user.token);
        await loadCategories();
        toast.success(`Successfully delete "${response.data.name}"`);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {console.log('CategoryController inside return')}
      {!loading ? (
        <h4>Create Category</h4>
      ) : (
        <h4 className='text-danger'>Loading</h4>
      )}
      <form onSubmit={handleCreateCategory}>
        <div className='form-group'>
          <label htmlFor='category-create-name'>Name</label>
          <input
            type='text'
            placeholder='Your category'
            id='category-create-name'
            className='form-control'
            value={category}
            autoFocus
            required
            onChange={handleChange}
          />
          <br />
          <button className='btn btn-outline-primary'>Save</button>
        </div>
      </form>
      {categories.map((c) => (
        <div className='alert alert-secondary' key={c._id}>
          {c.name}

          <span
            className='btn btn-sm float-right'
            onClick={() => {
              handleDeleteCategory(c.slug);
            }}
          >
            <DeleteOutlined className='text-danger' />
          </span>
          <Link to={`/admin/category/${c.slug}`}>
            <span className='btn btn-sm float-right'>
              <EditOutlined className='text-warning' />
            </span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CategoryController;
