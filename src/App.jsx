import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/calc" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
