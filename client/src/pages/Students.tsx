import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Stylings/Student.css"

const Students = () => {
      //student and "function" to set students
    
    const [students, setStudents] : [any,any] = useState([]);

    
  
   useEffect(()=>{
    
    const fetchAllStudents = async()=>{
        try {
            const response = await axios.get("http://localhost:8000/students"); // try to get the students
            setStudents(response.data); // get the data from the student table 
            console.log(response);
          } catch (error) {
            console.log(error)
        }
    }
    fetchAllStudents()
},[])



  return (

    <div>
    <div id = "div1">    
      <h1 className = "title">COMPUTER SCIENCE DEPARTMENT</h1>
      <h2 className = 'title'>Student Records Portal</h2>
      <div className='stu-table' key = {students.empilid}>
         <h1>{students.map((student:any)=>(
          <h5 id = "table-data">{student.empilid} {student.f_name}{student.m_name}{student.l_name}{student.dob}{student.email}{student.phone}{student.address}</h5>
          // <h1>{student.f_name}</h1>
         ))}</h1>


      </div>
    </div>
    <div id = "div2">
      <button className = "homepage dept"><Link to = "/Add">Add a Student Record</Link></button>
      <button className = "homepage dept"><Link to = "/Add">Delete Student Records</Link></button>
      <button className = "homepage dept"><Link to = "/Add">Update Student Records</Link></button>

    </div>
    <button><Link to = "/options"> Back to Options</Link></button>
  </div>
)
  
}

export default Students