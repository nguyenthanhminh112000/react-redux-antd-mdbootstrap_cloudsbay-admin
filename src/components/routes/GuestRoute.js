import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import LoadingToRedirectDashboard from './LoadingToRedirectDashboard';
console.log('GuestRoute outside');
const GuestRoute = (props) => {
  console.log('GuestRoute inside');
  const { user } = useSelector((state) => state);
  return !user ? (
    <>
      {console.log('GuestRoute inside return')}
      <Route {...props} />
    </>
  ) : (
    <>
      {console.log('GuestRoute inside return')}
      <LoadingToRedirectDashboard />
    </>
  );
};

export default GuestRoute;
