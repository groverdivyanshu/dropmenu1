import logo from './logo.svg';
import './App.css';
import '../src/Styles/drop.css';
// import Styles from "./Styles/dropdown.module.css"
import Dropdownselect from './Components/Dropdownselect';


function App() {
  return (
    <div className="style">
    <h1 style={{marginLeft:200}}>Should Use Dropdown Use?</h1>
      <Dropdownselect/>
      

    
    </div>
  );
}

export default App;
