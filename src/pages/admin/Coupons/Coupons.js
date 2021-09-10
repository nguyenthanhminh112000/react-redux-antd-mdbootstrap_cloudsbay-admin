import React from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import CouponsController from './CouponsController';
import DashBoardLayout from '../../layout/DashboardLayout';
console.log('Coupons outside');
const Coupons = () => {
  console.log('Coupons inside');
  return (
    <>
      {console.log('Coupons inside return')}
      <DashBoardLayout Nav={AdminNav} Controller={CouponsController} />
    </>
  );
};

export default Coupons;
