import React from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import DashboardController from './DashboardController';
import DashBoardLayout from '../../layout/DashboardLayout';
console.log('AdminDashboard outside');
const AdminDashboard = () => {
  console.log('AdminDashboard inside');
  return (
    <>
      {console.log('AdminDashboard inside return')}
      <DashBoardLayout Nav={AdminNav} Controller={DashboardController} />
    </>
  );
};

export default AdminDashboard;
