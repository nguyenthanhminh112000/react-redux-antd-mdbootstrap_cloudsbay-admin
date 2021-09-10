import React, { useState } from 'react';
import { auth, googleAuthProvider } from '../../firebase';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { GoogleOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
console.log('Login outside');
const Login = () => {
  console.log('Login inside');
  // hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // functions

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email, password);
    try {
      console.log('handleSubmit');
      await auth.signInWithEmailAndPassword(email, password);
      console.log('handleSubmit end');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      console.dir(error);
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      console.log('google login');
      const result = await auth.signInWithPopup(googleAuthProvider);
      console.log('google login end');
      console.log(result);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const handleChange = (e) => {
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  // components
  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          autoFocus
          required
          value={email}
          onChange={handleChange}
          placeholder='Your Admin Email'
          style={{ marginBottom: '5px' }}
          id='email'
        />
      </div>

      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          required
          value={password}
          onChange={handleChange}
          placeholder='Your Admin Password'
          style={{ marginBottom: '5px' }}
          id='password'
        />
      </div>

      <Button
        onClick={handleSubmit}
        type='primary'
        block
        shape='round'
        icon={<MailOutlined />}
        disabled={!email || password.length < 6}
        size='large'
      >
        Login with Email/Password
      </Button>
    </form>
  );
  return (
    <div className='container p-5'>
      {console.log('Login inside return')}
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          {!loading ? (
            <h4 style={{ textAlign: 'center' }}>Admin Login</h4>
          ) : (
            <h4 style={{ color: 'red', textAlign: 'center' }}>Loading...</h4>
          )}

          {loginForm()}
          <Button
            onClick={handleGoogleLogin}
            type='danger'
            block
            shape='round'
            icon={<GoogleOutlined />}
            size='large'
          >
            Login with Google
          </Button>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
