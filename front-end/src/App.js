import './App.css';
import About from './pages/About';
import HomePage from './pages/HomePage';
import {Routes, Route } from "react-router-dom";
import PredictionPage from './pages/PredictionPage';
import Visualization from './pages/Visualization';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="about" element={<About />}/>
        <Route path="prediction" element={<PredictionPage />}/>
        <Route path="visualization" element={<Visualization />}/>
      </Routes>
    </div>
  );
}

export default App;
