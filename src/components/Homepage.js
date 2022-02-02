import React from 'react';
import Intro from './intro/Intro';
import About from './about/About';
import Footer from './footer/Footer';
import Navigation from './navigation/Navigation';


function Homepage() {
    return (
      <div>
        <Intro></Intro>
        <About></About>
        <Footer></Footer>
      </div>
    );
  }
  
  export default Homepage;
  