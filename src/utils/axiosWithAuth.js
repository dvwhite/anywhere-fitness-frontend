import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://everyday-fitness.herokuapp.com/',
    headers: {
      Authorization: token,
    },
  });
};
