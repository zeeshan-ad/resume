import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AnimatedCursor from "react-animated-cursor"
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
      <BrowserRouter>
        <AnimatedCursor color={'92, 157, 241'} innerSize={10}
          outerSize={40} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
