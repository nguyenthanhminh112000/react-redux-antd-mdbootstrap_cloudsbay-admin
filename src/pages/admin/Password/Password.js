import React from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import PasswordController from './PasswordController';
import DashboardLayout from '../../layout/DashboardLayout';

console.log('Password outside');
const Password = () => {
  return <DashboardLayout Nav={AdminNav} Controller={PasswordController} />;
};

export default Password;
