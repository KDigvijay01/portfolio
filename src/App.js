import './App.css';
import About from './components/About';
import { Contact } from './components/Contact';
import Experience from './components/Experience';
import HeroSection from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
