/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const DisplayInputs = (props) => {
  <div className="displayInputs">
    <h1>
      {props.total}
      {' '}
      {props.operation}
      {' '}
      {props.next}
      {' '}
    </h1>
  </div>;
};

DisplayInputs.propTypes = {
  total: PropTypes.number.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default DisplayInputs;
