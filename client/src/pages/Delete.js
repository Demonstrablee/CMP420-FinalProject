import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Delete = () => {
    const [emplid, setEmplid] = useState("");
    const [student, setStudent] = useState([]);
    const navigate = useNavigate(); // move to another page 
    function handelChange(event) {
        // get whatever was the last version of the array for the state, if event.target.name has the same name as the feild update that feilds value
        setEmplid(event.target.value);
        //    console.log(empilid)
    }
    const handelSubmit = async (event) => {
        try {
            event.preventDefault(); // stop page from reloading
            const response = await axios.delete("http://localhost:8000/students/" + emplid); // get the sudents data
            //console.log("http://localhost:8000/students/"+ emplid);
            setStudent(response.data);
            //navigate("/students")
        }
        catch (error) {
            console.log(error);
        }
    };
    return (<div>
      <h1 className="title">COMPUTER SCIENCE DEPARTMENT</h1>
      <h2 className='title'>Delete a Student using EmpilID</h2>
      <div className='warning'>
        <p>The website is currently under maintenance. Do not attempt to delete a non-existant Student 
            as you may encounter<br />  a crash. Please reload the webpage to be able to submit again. We apologize for the inconvience. </p>
        </div>
      <input name="empilId" onChange={handelChange} placeholder='enter an empilid'></input>
      <button className='homepage-button' onClick={handelSubmit}>Submit</button>
      <button className=' homepage-button'><Link to="/students"> Back</Link></button>
  </div>);
};
export default Delete;
