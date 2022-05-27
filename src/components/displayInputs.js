/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class DisplayInputs extends React.Component {
  render() {
    return (
      <div className="displayInputs">
        <h1>
          {this.props.total}
          {' '}
          {this.props.operation}
          {' '}
          {this.props.next}
          {' '}
        </h1>
      </div>
    );
  }
}

DisplayInputs.propTypes = {
  total: PropTypes.number.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default DisplayInputs;
