import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Delete = () => {
    const [empilid, setEmpilid] = useState("");
    const [student, setStudent] = useState([]);
    const navigate = useNavigate(); // move to another page 
    function handelChange(event) {
        // get whatever was the last version of the array for the state, if event.target.name has the same name as the feild update that feilds value
        setEmpilid(event.target.value);
        //    console.log(empilid)
    }
    const handelSubmit = async (event) => {
        try {
            event.preventDefault(); // stop page from reloading
            const response = await axios.delete("http://localhost:8000/students/" + empilid); // get the sudents data
            console.log(response.data);
            setStudent(response.data);
            navigate("/students");
        }
        catch (error) {
            console.log(error);
        }
    };
    return (<div>
      <h1 className="title">COMPUTER SCIENCE DEPARTMENT</h1>
      <h2 className='title'>Delete a Student using EmpilID</h2>
      
      <input name="empilId" onChange={handelChange} placeholder='enter an empilid'></input>
      <button className='homepage-button' onClick={handelSubmit}>Submit</button>
      <button className=' homepage-button'><Link to="/students"> Back</Link></button>
  </div>);
};
export default Delete;
