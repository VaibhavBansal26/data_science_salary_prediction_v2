import './App.css';
import About from './pages/About';
import HomePage from './pages/HomePage';
import {Routes, Route } from "react-router-dom";
import PredictionPage from './pages/PredictionPage';
import Visualization from './pages/Visualization';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectDemo from './pages/ProjectDemo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="about" element={<About />}/>
        <Route path="prediction" element={<PredictionPage />}/>
        <Route path="project" element={<ProjectDemo />}/>
        <Route path="visualization" element={<Visualization />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
