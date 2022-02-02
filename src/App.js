import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';
import Contact from './pages/contact/Contact';
import Experience from './pages/experience/Experience';
import Posts from './pages/posts/Posts';

import Homepage from './components/Homepage'


function App() {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route exact path='/' exact element={<Homepage></Homepage>} />
          <Route exact path='/experience' exact element={<Experience></Experience>} />
          <Route exact path='/posts' exact element={<Posts></Posts>} />
          <Route exact path='/contact' exact element={<Contact></Contact>} />
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
