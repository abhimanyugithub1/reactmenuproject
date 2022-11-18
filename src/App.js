

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./Menu";
import { ReactDOM } from "react-dom";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


const App=()=>{
  return(
<>

    <Router>
      <Menu />
        <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>

        </Routes>


    </Router>




</>
    

  );
}


export default App;
