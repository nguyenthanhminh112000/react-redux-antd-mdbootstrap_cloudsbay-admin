import API from './index';

export const checkAdmin = (authtoken) => {
  return API.post(`/current-admin`, {}, { headers: { authtoken } });
};

console.log('api/auth.js');
