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
          <h2 className="align-self-md-center">Let&apos;s do some Maths!</h2>
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
