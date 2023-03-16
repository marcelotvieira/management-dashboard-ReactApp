import PropTypes from 'prop-types';
import React from 'react';

// import { Container } from './styles';

function InputSelect({ options, name, optionsData }) {

  return (
    <select name={ name } className="select">
      { options.map((opt, index) => (
        <option value={optionsData ? optionsData[index].id : opt} key={index}>{opt}</option>
      ))}
    </select>
  );
}

InputSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  optionsData: PropTypes.arrayOf(PropTypes.shape()),
};

export default InputSelect;