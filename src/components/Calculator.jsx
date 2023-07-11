import React, { useState } from 'react';
import Display from './Display';
import RowButtons from './RowButtons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div className="container">
      <div className="row my-3 text-light flex-column flex-md-row justify-content-center">
        <div className="col-md-6 my-3">
          <div className="d-flex align-items-center">
            {' '}
            <h2 className="align-self-md-center fs-4">
              Let&apos;s do some
              {' '}
              <span className="carrotColor">Maths!</span>
            </h2>
            <img src={`${process.env.PUBLIC_URL}/magician.png`} className="w-25" alt="Magician" />
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center flex-wrap ">
          <Display calculatorData={calculatorData} />
          <RowButtons
            calculatorData={calculatorData}
            setCalculatorData={setCalculatorData}
            calculate={calculate}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
