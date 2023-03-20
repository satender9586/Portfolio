
import './App.css';
import Header from './Components/Head/Header';
import Home from './Components/Hero/Home';
import Feature from './Components/Feature/Feature';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Testmonial from './Components/Testmonial/Testmonial';
import Contact from './Components/Blog/Contact';



function App() {
  

  return (
    <div className="App">
        <Header />
        <Home />
        <Feature />
        <Portfolio />
        <Resume />
        <Testmonial />
        <Contact />
       
    </div>
  );
}

export default App;
