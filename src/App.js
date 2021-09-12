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
import CategoryUpdate from './pages/admin/CategoryUpdate/CategoryUpdate';
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
        <AdminRoute path='/admin/password' exact component={Password} />
        <AdminRoute path='/admin/coupons' exact component={Coupons} />
        <AdminRoute path='/admin/product' exact component={Product} />
        <AdminRoute path='/admin/products' exact component={Products} />
        <AdminRoute path='/admin/sub' exact component={SubCategory} />
        <AdminRoute path='/admin/category' exact component={Category} />
        <AdminRoute
          path='/admin/category/:slug'
          exact
          component={CategoryUpdate}
        />
        <AdminRoute path='/' component={AdminDashboard} />
      </Switch>
    </>
  );
};

export default App;
