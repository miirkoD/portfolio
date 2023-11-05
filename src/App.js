// import { useState,useEffect } from 'react';
import './App.css';
import PhotoGallery from './components/PhotoGallery';
import Tekst from './components/TekstOmeni';
import Footer from './components/footer';
import ThingsIKnow from './components/ThingsIKnow';


function App() {
  return (
    <div className="App">
      <h1>Welcome to my portfolio</h1>
      <Tekst />
      <PhotoGallery />
      <ThingsIKnow/>
      <Footer/>
    </div>
  );
}

export default App;
