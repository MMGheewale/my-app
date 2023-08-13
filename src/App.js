import './App.css';
import Navbar from './components/Navbar';
// import TextForms from './components/TextForms';
import About from './components/About';


 function App() {
  return (
   <>
   <Navbar title="Dropin" navbarcontent2="About"/>
   <div className="container my-3">
   {/* <TextForms heading="Enter the text to analyse below"/> */}
   <About/>
   </div>
   </>
  );
}

export default App;
