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
        <button className = "homepage-button"><Link to = "/options">Departmental Affairs</Link></button>
        <button className = "homepage-button ">Student Life</button>
      </div>
    </div>
  )
}

export default Home