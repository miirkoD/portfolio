// import { useState,useEffect } from 'react';
import './App.css';
import Header1 from './components/Header1';
import PhotoGallery from './components/PhotoGallery';
import Tekst from './components/Tekst';


function App() {
  return (
    <div className="App">
      <Header1 />
      <h1>Welcome to my portfolio</h1>
      <Tekst />
      <PhotoGallery />
    </div>
  );
}

export default App;
