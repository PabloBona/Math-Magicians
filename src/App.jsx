import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="container">
      <h1 className="text-center text-light title">Math Magicians</h1>
      <Calculator />
    </div>

  );
}

export default App;
