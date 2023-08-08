import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

 function App() {
  return (
   <>
   <Navbar title="Dropin" navbarcontent2="About"/>
   <div className="container my-3">
      <TextForms heading="Enter the text to analyse below"/>
      </div>
      <button className="btn btn-primary">Convert to upper case</button>
   
   </>
  );
}

export default App;
