import React from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import ProductController from './ProductContrller';
import DashboardLayout from '../../layout/DashboardLayout';

console.log('Product outside');
const Product = () => {
  console.log('Product inside');
  return (
    <>
      {console.log('Product inside return')}
      <DashboardLayout Nav={AdminNav} Controller={ProductController} />;
    </>
  );
};

export default Product;
