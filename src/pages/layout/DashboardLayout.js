import React from 'react';
console.log('DashboardLayout outside');
const DashboardLayout = ({ Nav, Controller }) => {
  console.log('DashboardLayout inside');
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>
          <Nav />
        </div>
        <div className='col'>
          <Controller />
        </div>
        {console.log('DashboardLayout inside return')}
      </div>
    </div>
  );
};

export default DashboardLayout;
