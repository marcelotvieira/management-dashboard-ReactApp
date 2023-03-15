import axios from 'axios';

export const userLogin = (payload) => {
  return axios.post(
    'http://localhost:3001/user/login',
    payload
  );
};

export const getUser = (payload, user) => {
  const headers = {
    'authorization': user,
    'Content-Type': 'application/json',
  };
  return axios.get(
    'http://localhost:3001/user',
    { headers }
  );
};

export const getProjects = (user) => {
  const headers = {
    'authorization': user,
    'Content-Type': 'application/json',
  };
  return axios.get(
    'http://localhost:3001/projects',
    { headers }
  );
};

