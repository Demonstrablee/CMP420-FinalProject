import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Stylings/Student.css";
const Students = () => {
    //student and "function" to set students
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                const response = await axios.get("http://localhost:8000/students"); // try to get the students
                setStudents(response.data); // get the data from the student table 
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchAllStudents();
    }, []);
    return (<div>
    <div id="div1">    
      <h1 className="title">COMPUTER SCIENCE DEPARTMENT</h1>
      <h2 className='title'>Student Records Portal</h2>
      <div className='stu-table' key={students.empilid}>
         <h1>{students.map((student) => (<h5 id="table-data">{student.empilid} {student.f_name}{student.m_name}{student.l_name}{student.dob}{student.email}{student.phone}{student.address}</h5>))}</h1>


      </div>
    </div>
    <div className="div2">
      <button className="homepage-button "><Link to="/Add">Add a Student Record</Link></button>
      <button className="homepage-button "><Link to="/update/">Update Student Records</Link></button>
      <button className="homepage-button "><Link to="/delete">Delete Student Records</Link></button>
      <button className="homepage-button "><Link to="/search">Search Student Records</Link></button>
      <button className='homepage-button'><Link to="/options"> Back to Options</Link></button>
    </div>
    
  </div>);
};
export default Students;
