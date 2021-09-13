import React from 'react';
import DashboardLayout from './../../layout/DashboardLayout';
import AdminNav from '../../../components/nav/AdminNav';
import SubCategoryUpdateController from './SubCategoryUpdateController';
console.log('SubCategoryUpdate outside');
const SubCategoryUpdate = () => {
  console.log('SubCategoryUpdate inside');
  return (
    <>
      {console.log('SubCategoryUpdate inside return')}
      <DashboardLayout
        Nav={AdminNav}
        Controller={SubCategoryUpdateController}
      />
    </>
  );
};

export default SubCategoryUpdate;
