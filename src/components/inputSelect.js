import PropTypes from 'prop-types';
import React from 'react';

// import { Container } from './styles';

function InputSelect({ handleChange, options, name, optionsData }) {

  return (
    <select onChange={handleChange ? handleChange : () => {}} name={ name } className="select">
      { options.map((opt, index) => (
        <option value={optionsData ? optionsData[index] : opt} key={index}>{opt}</option>
      ))}
    </select>
  );
}

InputSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  optionsData: PropTypes.arrayOf(PropTypes.shape()),
  handleChange: PropTypes.instanceOf(Function)
};

export default InputSelect;