import API from './index';

export const getSub = (slug) =>
  API.get(`${process.env.REACT_APP_API}/sub/${slug}`);

export const getSubs = () => API.get(`${process.env.REACT_APP_API}/subs`);

export const createSub = (sub, authtoken) =>
  API.post(
    `/sub`,
    { name: sub },
    {
      headers: { authtoken },
    }
  );

export const updateSub = (slug, sub, authtoken) =>
  API.put(
    `${process.env.REACT_APP_API}/sub/${slug}`,
    { name: sub },
    {
      headers: { authtoken },
    }
  );

export const deleteCategory = (slug, authtoken) =>
  API.delete(`${process.env.REACT_APP_API}/sub/${slug}`, {
    headers: { authtoken },
  });
console.log('api/sub.js');
