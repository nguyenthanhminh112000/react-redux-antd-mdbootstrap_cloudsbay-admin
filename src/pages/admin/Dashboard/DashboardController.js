import React from 'react';
console.log('AdminDashboardController outside');
const AdminDashboardController = () => {
  console.log('AdminDashboardController inside');
  return (
    <div>
      AdminDashboardController
      {console.log('AdminDashboardController inside return')}
    </div>
  );
};

export default AdminDashboardController;
