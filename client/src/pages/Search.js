import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Search = () => {
    const [empilid, setEmpilid] = useState("");
    const [student, setStudent] = useState([]);
    function handelChange(event) {
        setEmpilid(event.target.value);
        console.log(empilid);
    }
    const handelSubmit = async (event) => {
        try {
            event.preventDefault(); // stop page from reloading
            const response = await axios.get("http://localhost:8000/students/" + empilid); // get the students data
            console.log(response.data[0]);
            setStudent(response.data[0]);
            console.log(student);
        }
        catch (error) {
            console.log(error);
        }
    };
    return (<div>
        <h1 className="title">COMPUTER SCIENCE DEPARTMENT</h1>
        <h2 className='title'>Search for a Student using EmpilID</h2>
        {/* 128497 */}
        <h2 id="table-data">{student.empilid}{student.f_name}{student.m_name}{student.l_name}{student.dob}{student.email}{student.phone}{student.address}</h2>

        <input name="empilId" onChange={handelChange} placeholder='enter an empilid'></input>
        <button className='homepage-button' onClick={handelSubmit}>Submit</button>
        <button className=' homepage-button'><Link to="/students"> Back</Link></button>
    </div>);
};
export default Search;
