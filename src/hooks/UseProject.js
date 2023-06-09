import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { getProjects, insertProject, deleteProject, updateProject } from '../services/request';

const UseProject = () => {

  const { user } = useContext(AppContext);
  const [visibleProjects, setVisibleProjects] = useState([]);


  const [focusProject, setFocusProject] = useState();
  const [userProjects, setUserProjects] = useState([]);
  const [isActiveForm, toggleActiveForm] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [projectTags, setProjectTags] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState();
  const [projectEditTarget, setProjectEditTarget] = useState();
  const [filterOptions, setFilterOptions] = useState({
    status: '',
    client: '',
    name: '',
  });

  const getUserProjects = (user) => {
    getProjects(user)
      .then(res => {
        if (userProjects !== res.data) setUserProjects(res.data);
      })
      .catch(err => console.log(err.response.data));
  };

  const handleChangeFilter = (e) => {
    const { name, value } = e.target;
    const filters = {...filterOptions, [name]: value };
    if (value.includes('Todos')) filters[name] = '';

    setFilterOptions(filters);
  };



  const handleChangeTag = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      return setProjectTags([...projectTags, value]);
    }
    return setProjectTags(projectTags.filter((tag) => tag !== value));
  };

  const dataFormat = (data) => {
    const [initialMonth, initialDay, initialYear] = data.initialDate.split('/').map(Number);
    const [endMonth, endDay, endYear] = data.endDate.split('/').map(Number);
    const [expectedEndMonth, expectedEndDay, expectedEndYear] = data.expectedEndDate.split('/').map(Number);
    
    data.initialDate = new Date(`${initialYear}-${initialMonth}-${initialDay}`).toISOString();
    data.endDate = new Date(`${endYear}-${endMonth}-${endDay}`).toISOString();
    data.expectedEndDate = new Date(`${expectedEndYear}-${expectedEndMonth}-${expectedEndDay}`).toISOString();
    data.ofertedValue = Number(data.ofertedValue);
    data.value = Number(data.value);
    return data;
  };

  const projectSubmit = (e) => {
    e.preventDefault();
    const fieldCount = e.target.length -3;
    const fields = {};
    for (let i = 0; i <= fieldCount ; i+= 1) {
      fields[e.target[i].name]= (e.target[i].value);
    }
    fields.tags = projectTags;
    const data = dataFormat(fields);

    if (projectEditTarget) {
      return updateProject(projectEditTarget.id, fields, user)
        .then(() => toggleActiveForm(false))
        .catch(err => {
          setInputError(err.response.data.message);
          console.log(err.response.data);
        });
    }

    insertProject(data, user)
      .then(() => toggleActiveForm(false))
      .catch(err => {
        setInputError(err.response.data.message);
        console.log(err.response.data);
      });
  };

  const handleDeleteProject = (id) => {
    deleteProject(id, user)
      .then(() => {
        setFocusProject();
      })
      .catch(err => {
        setInputError(err.response.data.message);
        console.log(err.response.data);
      });
  };

  const toggleProjectForm = () => toggleActiveForm(!isActiveForm);

  return {
    userProjects,
    handleDeleteProject,
    getUserProjects,
    setUserProjects,
    setFocusProject,
    focusProject,
    isActiveForm,
    toggleProjectForm,
    projectSubmit,
    inputError,
    setInputError,
    projectTags,
    handleChangeTag,
    filteredProjects,
    handleChangeFilter,
    setFilteredProjects,
    filterOptions,
    visibleProjects,
    setVisibleProjects,
    projectEditTarget,
    setProjectEditTarget,
  };
};

export default UseProject;