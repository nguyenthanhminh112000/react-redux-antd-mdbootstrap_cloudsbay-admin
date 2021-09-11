// import { createCategory, getCategories } from '../api/category';
// import { toast } from 'react-toastify';

// export const aCreateCategory =
//   (categoryName, token, setLoading, setCategory, setCategories) =>
//   async (dispatch) => {
//     try {
//       setLoading(true);
//       const category = await createCategory(categoryName, token);
//       const categories = await getCategories(categoryName, token);
//       toast.success(`"${category.data.name}" is created.`);
//       setCategory('');
//       setLoading(false);
//     } catch (error) {
//       toast.error(error.response.data.message);
//       setLoading(false);
//       console.dir(error);
//     }
//   };

// export const aGetCategories = () => (dispatch) => {};
