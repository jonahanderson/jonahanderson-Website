import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div>
      {/* <Navigation></Navigation> */}
      <Intro></Intro>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
