import React from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import CategoryController from './CategoryController';
import DashBoardLayout from '../../layout/DashboardLayout';
console.log('Category outside');
const Category = () => {
  console.log('Category inside');
  return (
    <>
      {console.log('Category inside return')}
      <DashBoardLayout Nav={AdminNav} Controller={CategoryController} />
    </>
  );
};

export default Category;
