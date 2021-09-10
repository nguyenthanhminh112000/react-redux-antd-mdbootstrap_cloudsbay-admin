import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './components/nav/Header';
import Login from './pages/auth/Login';
import AdminRoute from './components/routes/AdminRoute';
import GuestRoute from './components/routes/GuestRoute';
import AdminDashboard from './pages/admin/Dashboard/Dashboard';
import Password from './pages/admin/Password/Password';
import Category from './pages/admin/Category/Category';
import Coupons from './pages/admin/Coupons/Coupons';
import Product from './pages/admin/Product/Product';
import Products from './pages/admin/Products/Products';
import SubCategory from './pages/admin/SubCategory/SubCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authObserver } from './actions/auth';
console.log('App outside');
const App = () => {
  //hooks
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    console.log('App inside useEffect');
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('App inside onAuthStateChanged');
      dispatch(authObserver(user, history));
    });
    return () => {
      console.log('unsubcribe');
      return unsubscribe();
    };
  }, []);
  //writing functions
  console.log('App inside');
  return (
    <>
      <ToastContainer />
      <Header />
      <Switch>
        <GuestRoute path='/login' exact component={Login} />
        {console.log('App inside return')}
        <AdminRoute path='/admin/password' component={Password} />
        <AdminRoute path='/admin/coupons' component={Coupons} />
        <AdminRoute path='/admin/product' component={Product} />
        <AdminRoute path='/admin/products' component={Products} />
        <AdminRoute path='/admin/sub' component={SubCategory} />
        <AdminRoute path='/admin/category' component={Category} />
        <AdminRoute path='/' component={AdminDashboard} />
      </Switch>
    </>
  );
};

export default App;
