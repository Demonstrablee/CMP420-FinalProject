import '../Stylings/Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <div id = "div1">    
        <h1 className = "title">COMPUTER SCIENCE DEPARTMENT</h1>
      </div>
      <div id = "div2">
        <button className = "homepage dept"><Link to = "/options">Departmental Affairs</Link></button>
        <button className = "homepage student">Student Life</button>
      </div>
    </div>
  )
}

export default Home