import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../Stylings/Options.css';

const Options = () => {


  return (
    <div>
        <div id = "div1">    
        <h1 className = "title">COMPUTER SCIENCE DEPARTMENT</h1>
      </div>
        <div className = 'warning'>
        <p>The website is currently under maintenance. The systems for Departments, 
          Instructors and Cheating Incidents are down at the moment we apologize for the 
          temporary inconvience. </p>
        </div>
        <div>
        <button className = "homepage-button">Departments</button>
        <button className = "homepage-button">Instructors</button>
        <button className = "homepage-button"><Link to = "/students">Students</Link></button>
        </div>

        <div>
            <button className = "homepage-button">Cheating Incidents</button>
        </div>
        <button className=' homepage-button'><Link to = "/"> Back to Home</Link></button>
    </div>
  )
}

export default Options