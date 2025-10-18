import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/Aboutme';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import { Contact } from './components/Contact';


function App() {
  return (

    <div>
      <NavBar />
      <Banner />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      
    </div>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
