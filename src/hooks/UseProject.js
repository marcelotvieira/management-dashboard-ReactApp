import { useState } from 'react';
import { getProjects } from '../services/request';

const UseProject = () => {

  const [focusProject, setFocusProject] = useState({});

  const [userProjects, setUserProjects] = useState([]);

  const getUserProjects = (user) => {
    getProjects(user)
      .then(res => {
        if (userProjects !== res.data) setUserProjects(res.data);
      })
      .catch(err => console.log(err.response.data));
  }; 

  return { userProjects, getUserProjects, setUserProjects, setFocusProject, focusProject };
};

export default UseProject;