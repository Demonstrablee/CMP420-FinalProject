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
        <div id = 'warning'>
        <p>The Website is currently under maintenance. The systems for Departments, 
          Instructors and <br/>Cheating Incidents are down at the moment we apologize for the 
          temporary inconvience </p>
        </div>
        <div>
        <button className = "homepage dept">Departments</button>
        <button className = "homepage instructor">Instructors</button>
        <button className = "homepage student"><Link to = "/students">Students</Link></button>
        </div>

        <div>
            <button className = "homepage incident">Cheating Incidents</button>
        </div>
        <button className=' homepage return'><Link to = "/"> Back to Home</Link></button>
    </div>
  )
}

export default Options