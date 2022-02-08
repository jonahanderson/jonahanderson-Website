import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Contact from './pages/contact/Contact';
import Experience from './pages/experience/Experience';
import Posts from './pages/posts/Posts';
import EthereumPost from './pages/posts/ethereumpost/EthereumPost'

import Homepage from './components/Homepage'


function App() {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route exact path='/' element={<Homepage></Homepage>} />
          <Route exact path='/experience' element={<Experience></Experience>} />
          <Route exact path='/posts' element={<Posts></Posts>} />
          <Route exact path='/posts/how+to+mine+ethereum' element={<EthereumPost></EthereumPost>} />

          <Route exact path='/contact' element={<Contact></Contact>} />

          {/* <Route component={<NotFound></NotFound>}></Route> */}

        </Routes>
      </Router>
    </div>  
  );
}

export default App;
