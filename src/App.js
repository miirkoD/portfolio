// import { useState,useEffect } from 'react';
import './App.css';
import PhotoGallery from './components/PhotoGallery';
import Tekst from './components/TekstOmeni';
import Footer from './components/footer';
import ThingsIKnow from './components/ThingsIKnow';
import InProgress from './components/InProcess';


function App() {
  return (
     /* <InProgress/> */
    <div className="App">
  
      <Tekst />
      
      <ThingsIKnow/>
      <Footer/> 
    </div>
  );
}

export default App;
