import './Stylings/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './pages/Add';
import Update from './pages/Update';
import Home from './pages/Home';
import Options from './pages/Options';
import Students from './pages/Students';
import Search from './pages/Search';
import Delete from './pages/Delete';
function App() {
    return (<div className='App'>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/options" element={<Options />}/>
          <Route path="/students" element={<Students />}/>

          <Route path="/add" element={<Add />}/>
          <Route path="/update" element={<Update />}/>
          <Route path="/delete" element={<Delete />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </BrowserRouter>
     
      
    </div>);
}
export default App;
