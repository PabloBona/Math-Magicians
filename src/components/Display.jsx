import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ calculatorData }) => (
  <div className="col-8 col-6 d-flex justify-content-center">
    <div className="d-flex justify-content-end text-light px-1 py-2 w-100 mx-5">
      {calculatorData ? (calculatorData.next || calculatorData.total || '0') : '0'}
    </div>
  </div>
);

Display.propTypes = {
  calculatorData: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    next: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    operation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

Display.defaultProps = {
  calculatorData: null,
};

export default Display;
