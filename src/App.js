import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
// import { Route } from "react-router-dom";

function App() {
  
  return (
    <div>
  
      <Navbar title="Cafe Application"/>
      <Homepage />
    </div>
  );
}

export default App;
