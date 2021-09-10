import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
console.log('LoadingToRedirectDashboard outside');
const LoadingToRedirectDashboard = () => {
  //using hooks
  const [count, setCount] = useState(5);
  const history = useHistory();
  console.log('LoadingToRedirectDashboard inside');
  useEffect(() => {
    console.log('LoadingToRedirectDashboard inside useEffect');
    const timeoutID = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    count === 0 && history.push('/');
    return () => {
      clearTimeout(timeoutID);
    };
  });

  //write functions

  return (
    <div className='container p-5 text-center'>
      <h1 className='text-danger'>
        You will be redirect after {count} seconds.
        {console.log('LoadingToRedirectDashboard inside return')}
      </h1>
    </div>
  );
};

export default LoadingToRedirectDashboard;
