import React, { useState } from 'react';

import { auth } from '../../../firebase';
import { toast } from 'react-toastify';
const PasswordController = () => {
  //using hooks
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  // write functions
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    console.log('handleUpdatePassword');
    try {
      setLoading(true);
      await auth.currentUser.updatePassword(password);
      toast.success('Password Updated.');
      setLoading(false);
      setPassword('');
    } catch (error) {
      setLoading(false);
      toast.error(`${error.message}`);
    }
  };

  console.log('Password inside');

  const passwordUpdateForm = () => {
    return (
      <form onSubmit={handleUpdatePassword}>
        <div className='form-group'>
          <label htmlFor='password'>New Password</label>
          <input
            type='password'
            id='password'
            placeholder='Your new password'
            className='form-control'
            value={password}
            onChange={handlePasswordChange}
            disabled={loading}
          />
          <button
            className='btn btn-primary'
            disabled={password.length < 6 || loading}
          >
            Submit
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      {loading ? (
        <h4 className='text-danger'>Loading...</h4>
      ) : (
        <h4>Update Password</h4>
      )}
      {passwordUpdateForm()}
    </>
  );
};

export default PasswordController;
