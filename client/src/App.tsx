import './Stylings/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Add from './pages/Add';
import Update from './pages/Update';
import Home from './pages/Home';
import Options from './pages/Options';
import Students from './pages/Students';


function App() {
   return(
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path = "/" element= {<Home/>}/>
          <Route path = "/add" element= {<Add/>}/>
          <Route path = "/update" element= {<Update/>}/>
          <Route path = "/options" element= {<Options/>}/>
          <Route path = "/students" element= {<Students/>}/>
        </Routes>
      </BrowserRouter>
     
      
    </div>
     

   
   );
}

export default App; 
