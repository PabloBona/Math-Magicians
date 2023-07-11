import React from 'react';
import PropTypes from 'prop-types';

const RowButtons = ({ calculatorData, setCalculatorData, calculate }) => {
  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <>
      <div className="col-8 col-6 d-flex justify-content-center flex-wrap w-50 bg">
        <button onClick={() => handleButtonClick('AC')} type="submit" className="btn btn-light rounded-0 border p-2 w-25 rounded-5 my-1 font-size ">AC</button>
        <button onClick={() => handleButtonClick('+/-')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">±</button>
        <button onClick={() => handleButtonClick('%')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">%</button>
        <button onClick={() => handleButtonClick('÷')} type="submit" className="btn btn-warning rounded-0 border py-2 w-25 rounded-5 my-1">÷</button>
        <button onClick={() => handleButtonClick('7')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">7</button>
        <button onClick={() => handleButtonClick('8')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">8</button>
        <button onClick={() => handleButtonClick('9')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">9</button>
        <button onClick={() => handleButtonClick('x')} type="submit" className="btn btn-warning rounded-0 border py-2 w-25 rounded-5 my-1">x</button>
        <button onClick={() => handleButtonClick('4')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">4</button>
        <button onClick={() => handleButtonClick('5')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">5</button>
        <button onClick={() => handleButtonClick('6')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">6</button>
        <button onClick={() => handleButtonClick('-')} type="submit" className="btn btn-warning rounded-0 border py-2 w-25 rounded-5 my-1">-</button>
        <button onClick={() => handleButtonClick('1')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">1</button>
        <button onClick={() => handleButtonClick('2')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">2</button>
        <button onClick={() => handleButtonClick('3')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">3</button>
        <button onClick={() => handleButtonClick('+')} type="submit" className="btn btn-warning rounded-0 border py-2 w-25 rounded-5 my-1">+</button>
        <button onClick={() => handleButtonClick('0')} type="submit" className="btn btn-light rounded-0 border py-2 w-50 rounded-5 my-1">0</button>
        <button onClick={() => handleButtonClick('.')} type="submit" className="btn btn-light rounded-0 border py-2 w-25 rounded-5 my-1">.</button>
        <button onClick={() => handleButtonClick('=')} type="submit" className="btn btn-warning rounded-0 border py-2 w-25 rounded-5 my-1">=</button>
      </div>
    </>
  );
};

RowButtons.propTypes = {
  calculatorData: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    next: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    operation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  setCalculatorData: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired,
};

export default RowButtons;
