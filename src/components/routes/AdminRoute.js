import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import LoadingToRedirect from './LoadingToRedirect';
console.log('AdminRoute outside');
const AdminRoute = (props) => {
  console.log('AdminRoute inside');
  const { user } = useSelector((state) => state);
  return user ? (
    <>
      {console.log('AdminRoute inside return')}
      <Route {...props} />
    </>
  ) : (
    <>
      {console.log('AdminRoute inside return')}
      <LoadingToRedirect />
    </>
  );
};

export default AdminRoute;
