import FirstRowButtons from './FirstRowButtons';
import FooterButtons from './FooterButtons';
import ForthRowButton from './ForthRowButtons';
import SecondRowButtons from './SecondRowButtons';
import ThirdRowButton from './ThirdRowButtons';

const Calculator = () => (
  <>
    <div className="row justify-content-center my-3">
      <div className="col-8 col-6">
        <div className=" d-flex justify-content-end bg-secondary text-light px-1 py-2">0</div>
      </div>
      <FirstRowButtons />
      <SecondRowButtons />
      <ThirdRowButton />
      <ForthRowButton />
      <FooterButtons />
    </div>
  </>
);

export default Calculator;
