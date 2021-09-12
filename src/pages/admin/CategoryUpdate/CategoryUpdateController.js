import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateCategory, getCategory } from './../../../api/category';
import { useHistory, useParams } from 'react-router-dom';
console.log('CategoryUpdateController outside');
const CategoryUpdateController = () => {
  console.log('CategoryUpdateController inside');
  // hooks
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state);
  const history = useHistory();
  const { slug } = useParams();
  useEffect(() => {
    console.log('CategoryUpdateController inside useEffect');
    loadCategory();
  }, []);
  // writing functions
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const loadCategory = async () => {
    try {
      const { data: category } = await getCategory(slug);
      setCategory(category.name);
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      history.push('/admin/category');
    }
  };
  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const categoryResponse = await updateCategory(
        slug,
        { name: category },
        user.token
      );
      toast.success(`"${categoryResponse.data.name}" is updated.`);
      history.push('/admin/category');
    } catch (error) {
      setLoading(false);
      console.dir(error);
      toast.error(`${error.response.data.message}`);
    }
  };

  return (
    <>
      {console.log('CategoryUpdateController inside return')}
      {!loading ? (
        <h4>Update Category</h4>
      ) : (
        <h4 className='text-danger'>Loading</h4>
      )}
      <form onSubmit={handleUpdateCategory}>
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
          <button
            className='btn btn-outline-primary'
            disabled={!(category.length >= 3 && category.length <= 32)}
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryUpdateController;
