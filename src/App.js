import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Navmenu from "./components/Navmenu";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <div className="line"></div>
        <Navmenu></Navmenu>
    </div>
  );
}

export default App;
