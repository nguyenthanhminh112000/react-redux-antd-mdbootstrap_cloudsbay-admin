import API from './index';

export const getSub = (slug) =>
  API.get(`${process.env.REACT_APP_API}/sub/${slug}`);

export const getSubs = () => API.get(`${process.env.REACT_APP_API}/subs`);

export const createSub = (name, parent, authtoken) =>
  API.post(
    `/sub`,
    { name: name, parent: parent },
    {
      headers: { authtoken },
    }
  );

export const updateSub = (slug, sub, authtoken) =>
  API.put(`${process.env.REACT_APP_API}/sub/${slug}`, sub, {
    headers: { authtoken },
  });

export const deleteSub = (slug, authtoken) =>
  API.delete(`${process.env.REACT_APP_API}/sub/${slug}`, {
    headers: { authtoken },
  });
console.log('api/sub.js');
