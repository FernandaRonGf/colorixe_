import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorCard from './components/ColorCard';
import Header from './components/Header'
import ImageInput from './components/ImageInput'

function App() {
  return (
    <div className="App">
  <Header />
  <ColorCard />
  <ImageInput/>
    </div>
  );
}

export default App;
