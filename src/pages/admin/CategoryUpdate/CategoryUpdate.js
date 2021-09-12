import React from 'react';
import DashboardLayout from './../../layout/DashboardLayout';
import AdminNav from '../../../components/nav/AdminNav';
import CategoryUpdateController from './CategoryUpdateController';
console.log('CategoryUpdate outside');
const CategoryUpdate = () => {
  console.log('CategoryUpdate inside');
  return (
    <>
      {console.log('CategoryUpdate inside return')}
      <DashboardLayout Nav={AdminNav} Controller={CategoryUpdateController} />
    </>
  );
};

export default CategoryUpdate;
