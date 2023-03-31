import Navigation from "./components/Navigation";
import About from "./components/About";
import Experince from './components/Experience'
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Email from "./components/Email";
import Desc from "./components/Desc";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
const App = () => {
  return (
      <div className="margin-class md:mt-6 md:mx-8 md:h-full pr-4 ml-4 mt-4">
        <Navigation/>
       <Logos/>
        <div className="main-div md:flex md:h-full">
          <div className="content md:mt-20 md:ml-40 md:h-full ">
          <Desc/>
          <About/>
          <Experince/>
          <Projects/>
          <Contacts />
          </div>
          </div>
      <Email />
      <Footer/>
      
          </div>
  );
};
export default App;
