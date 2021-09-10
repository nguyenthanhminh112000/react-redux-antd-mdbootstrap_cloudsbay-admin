import React from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import ProductsController from './ProductsController';
import DashboardLayout from '../../layout/DashboardLayout';

console.log('Products outside');
const Products = () => {
  console.log('Products inside');
  return (
    <>
      {console.log('Products inside return')}
      <DashboardLayout Nav={AdminNav} Controller={ProductsController} />;
    </>
  );
};

export default Products;
