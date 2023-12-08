import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Search = () => {
    const [emplid, setEmpilid] = useState("");
    const [student, setStudent] = useState([]);
    function handelChange(event) {
        setEmpilid(event.target.value);
        //console.log(emplid)
    }
    const handelSubmit = async (event) => {
        try {
            event.preventDefault(); // stop page from reloading
            const response = await axios.get("http://localhost:8000/students/" + emplid); // get the students data
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

        <div className='warning'>
        <p>The website is currently under maintenance. Note on submission of an empilid that does not 
            exist in the database that <br /> you may encounter a crash. Please reload the webpage to be
            able to submit again. We apologize for the inconvience. </p>
        </div>
        <h5 className="table-data">{student.emplid} {student.firstName} {student.mi} {student.lastName} {(student.length === 0) ? "" : (student.dob).substring(0, 10)} {student.email} {student.phone} {student.house_number} {student.street} {student.city} {student.zipCode} {student.state}</h5>

        <input name="empilId" onChange={handelChange} placeholder='enter an empilid'></input>
        <button className='homepage-button' onClick={handelSubmit}>Submit</button>
        <button className=' homepage-button'><Link to="/students"> Back</Link></button>
    </div>);
};
export default Search;
