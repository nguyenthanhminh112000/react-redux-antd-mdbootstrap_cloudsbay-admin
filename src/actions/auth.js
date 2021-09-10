import { LOG_IN, LOG_OUT } from './../constants/actionTypes';
import { checkAdmin } from './../api/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
export const authObserver = (user, history) => async (dispatch) => {
  try {
    if (user) {
      console.log('action/auth.js');
      const { token } = await user.getIdTokenResult();
      const { data: admin } = await checkAdmin(token);
      console.log(admin);
      console.log('----------------------------1');
      dispatch({
        type: LOG_IN,
        payload: { ...admin, token },
      });
      console.log('----------------------------2');
      toast.success('Login Successfully as Admin.');
      history.push('/');
    } else {
      dispatch(logout());
      history.push('/login');
    }
  } catch (error) {
    console.error(error);
    console.dir(error);
    // toast.error(`User can't access Admin resource.`);
    toast.error(`${error.message}`);
    auth.signOut();
  }
};
export const logout = () => ({ type: LOG_OUT, payload: null });
