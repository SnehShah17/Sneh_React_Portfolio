import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
// import { Contact } from "./components/Contact";
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
       <Banner></Banner>
       <Skills></Skills>
       <Projects></Projects>
       {/* <Contact></Contact> */}
       <Footer></Footer>
    </div>
  );
}

export default App;
