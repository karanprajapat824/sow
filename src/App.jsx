import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Pricelist from "./Pages/Pricelist";
import Terms from './Pages/Terms';
import "./App.css";

const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/terms" element={<Terms />} />
        <Route path="/" element={<Pricelist />} />
      </Routes>
    </Router>
  )
   
}

export default App;