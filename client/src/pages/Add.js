import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Add = (props) => {
    const [student, setStudent] = useState({
        empilid: "",
        f_name: "",
        m_name: "",
        l_name: "",
        dob: null,
        phone: "",
        email: "",
        address: "",
    });
    const navigate = useNavigate(); // move to another page 
    function handelChange(event) {
        // get whatever was the last version of the array for the state, if event.target.name has the same name as the feild update that feilds value
        setStudent((previous) => (Object.assign(Object.assign({}, previous), { [event.target.name]: event.target.value })));
        console.log(student);
    }
    const handelSubmit = async (event) => {
        try {
            event.preventDefault(); // stop page from reloading
            await axios.post("http://localhost:8000/students", student);
            navigate("/students");
        }
        catch (error) {
            console.log(error);
        }
    };
    return (<div>
      <h1 className="title">COMPUTER SCIENCE DEPARTMENT</h1>
      <h2 className='title'>Add a Student Record</h2>
        <form id="form1">
            <label className="label"> First Name</label>
            <label className="label"> Middle Intial </label> 
            <label className="label"> Middle Intial </label> 

            <br />
            <input className="sf_name" type="text" placeholder="firstName" onChange={handelChange} name="f_name"></input>
            <input className="sl_name" type="text" placeholder="middleInit" onChange={handelChange} name="m_name"></input>
            <input className="sl_name" type="text" placeholder="lastName" onChange={handelChange} name="l_name"></input>
            <input className="sl_name" type="text" placeholder="DOB" onChange={handelChange} name="dob"></input>

        </form>

        <form id="form2"><br />
            <label className="label"> Empilid</label> 
            <label className="label"> phone number</label>
            <label className="label"> email </label>
            <br />
            
            <input id="sf_name" type="text" placeholder="empilid" onChange={handelChange} name="empilid"></input>
            <input id="sl_name" type="text" placeholder="phone" onChange={handelChange} name="phone"></input>
            <input id="sl_name" type="text" placeholder="email" onChange={handelChange} name="email"></input>
            <input id="sl_name" type="text" placeholder="address" onChange={handelChange} name="address"></input>
        </form>
        
        
        <button className="homepage-button" onClick={handelSubmit}>Submit</button>
        <button className=' homepage-button'><Link to="/students"> Back</Link></button>
    </div>);
};
export default Add;
