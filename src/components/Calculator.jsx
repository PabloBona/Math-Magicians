import Display from './Display';
import RowButtons from './RowButtons';

const Calculator = () => (
  <div className="container">
    <div className="row justify-content-center my-3">
      <Display />
      <RowButtons />
    </div>
  </div>
);

export default Calculator;
