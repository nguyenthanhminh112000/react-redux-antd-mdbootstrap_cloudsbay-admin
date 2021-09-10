import React from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import SubCategoryController from './SubCategoryController';
import DashboardLayout from '../../layout/DashboardLayout';

console.log('SubCategory outside');
const SubCategory = () => {
  console.log('SubCategory inside');
  return (
    <>
      {console.log('SubCategory inside return')}
      <DashboardLayout Nav={AdminNav} Controller={SubCategoryController} />;
    </>
  );
};

export default SubCategory;
