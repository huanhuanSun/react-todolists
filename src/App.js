
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

function App() {
  const state = useSelector(state => state)
  
  return (
    <div className="App">
      <Header  />
      <Main />
      <Footer  />
    </div>
  );
}

export default App;
