import axios from 'axios';

export const userLogin = (payload) => {
  return axios.post(
    'http://localhost:3001/user/login',
    payload
  );
};

export const userRegister = (payload) => {
  return axios.post(
    'http://localhost:3001/user/register',
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

export const getClients = (user) => {
  const headers = {
    'authorization': user,
    'Content-Type': 'application/json',
  };
  return axios.get(
    'http://localhost:3001/clients',
    { headers }
  );
};

export const insertProject = (payload, user) => {
  const headers = {
    'authorization': user,
    'Content-Type': 'application/json',
  };
  return axios.post(
    'http://localhost:3001/projects',
    payload,
    { headers }
  );
};

