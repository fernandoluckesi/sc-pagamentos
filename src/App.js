import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Trade from './components/Trade';
import './App.css';
import './styles/styles.scss';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/trade" element={<Trade />} />
      </Routes>
    </Router>
  );
}

export default App;
