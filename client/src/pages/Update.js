import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Update = () => {
    const [currStudent, setCurrStudent] = useState([]);
    const [student, setStudent] = useState({
        f_name: "",
        m_name: "",
        l_name: "",
        dob: null,
        email: "",
        phone: "",
        address: "",
    });
    const [empilid, setEmpilid] = useState("");
    const navigate = useNavigate(); // move to another page 
    const location = useLocation(); // get the current page you are on
    // Was working on how to get the students current record to show what it looked like before an update
    //   useEffect(()=>{
    //     const fetchStudent = async()=>{
    //         try {
    //             const response = await axios.get("http://localhost:8000/students/"+ empilid); // try to get the students
    //             setStudent(response.data); // get the data from the student table 
    //             setStudent((previous:any)=> ({}))
    //             console.log(response);
    //           } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchStudent()
    // },[handelChange])
    function handelChange(event) {
        // get whatever was the last version of the array for the state, if event.target.name has the same name as the feild update that feilds value
        setStudent((previous) => (Object.assign(Object.assign({}, previous), { [event.target.name]: event.target.value })));
        setEmpilid((event.target.name == 'empilid') ? event.target.value : empilid);
        console.log(student);
        console.log(empilid);
    }
    const handelSubmit = async (event) => {
        try {
            event.preventDefault(); // stop page from reloading
            await axios.put("http://localhost:8000/students/" + empilid, student);
            const response = await axios.get("http://localhost:8000/students/" + empilid); // get the sudents data
            console.log("http://localhost:8000/students/" + empilid);
            console.log(student);
            navigate("/students"); // go back to the students portal page
        }
        catch (error) {
            console.log(error);
        }
    };
    return (<div>
        <h1 className="title">COMPUTER SCIENCE DEPARTMENT</h1>
        <h2 className='title'>Update a Students Records</h2>
        <h2 id="table-data">{student.empilid}{student.f_name}{student.m_name}{student.l_name}{student.dob}{student.email}{student.phone}{student.address}</h2>

        <form>
            <label className="label"> Empilid</label> <br />
            <input id="sf_name" type="text" placeholder="empilid" onChange={handelChange} name="empilid"></input>
        </form>
          <form id="form1">
              <label className="label"> Enter a Students First Name, Middle Intial and Last Name</label> <br />
              
              <input id="sf_name" type="text" placeholder="firstName" onChange={handelChange} name="f_name"></input>
              <input id="sl_name" type="text" placeholder="middleInit" onChange={handelChange} name="m_name"></input>
              <input id="sl_name" type="text" placeholder="lastName" onChange={handelChange} name="l_name"></input>
              <input id="sl_name" type="text" placeholder="DOB" onChange={handelChange} name="dob"></input>
  
          </form>
  
          <form id="form2"><br />
        
              <label className="label"> phone number</label>
              <label className="label"> email </label>
              <label className="label"> address</label>
              <br />
              <input id="sl_name" type="text" placeholder="phone" onChange={handelChange} name="phone"></input>
              <input id="sl_name" type="text" placeholder="email" onChange={handelChange} name="email"></input>
              <input id="sl_name" type="text" placeholder="address" onChange={handelChange} name="address"></input>
          </form>
          
          
          <button className="homepage-button" onClick={handelSubmit}>Submit</button>
          <button className=' homepage-button'><Link to="/students"> Back</Link></button>
      </div>);
};
export default Update;
