import React, {useState} from 'react';
import Header from './components/Header';
import './App.css';
import './styles/styles.scss';

function App() {
  const [section, setSection] = useState('trade');

  const showSection = (section) => {
    if (section === 'wallet') return 'carteiraa';
    return 'tradeee'
  }

  return (
    <div className="App">
      <Header changeSection={(section) => setSection(section)}/>
      <div className="mt-5 pt-3">
      {showSection(section)}
      </div>
    </div>
  );
}

export default App;
