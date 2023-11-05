// import { useState,useEffect } from 'react';
import './App.css';
import Header1 from './components/Header1';
import PhotoGallery from './components/PhotoGallery';
import Tekst from './components/TekstOmeni';
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <h1>Welcome to my portfolio</h1>
      <Tekst />
      <PhotoGallery />
      <Footer/>
    </div>
  );
}

export default App;
