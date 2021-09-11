import API from './index';

export const getCategory = (slug) =>
  API.get(`${process.env.REACT_APP_API}/category/${slug}`);

export const getCategories = () =>
  API.get(`${process.env.REACT_APP_API}/categories`);

export const createCategory = (category, authtoken) =>
  API.post(
    `/category`,
    { name: category },
    {
      headers: { authtoken },
    }
  );

export const updateCategory = (slug, category, authtoken) =>
  API.put(`${process.env.REACT_APP_API}/category/${slug}`, category, {
    headers: { authtoken },
  });

export const deleteCategory = (slug, authtoken) =>
  API.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
    headers: { authtoken },
  });
console.log('api/category.js');
