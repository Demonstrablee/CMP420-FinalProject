import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
    const [currStudent, setCurrStudent] = useState([]);
    const [student, setStudent]:[any,any] = useState({
        firstName: "",
        mi:"" ,
        lastName: "",
        dob: "",
        email:"",
        phone: "",
        house_number: "",
        city:"",
        zipCode:"",
        state:""
  }
  );
  const[emplid, setEmplid]: [any,any] = useState("");
  const[serverResponse, setServerResponse] = useState("");

  const navigate = useNavigate() // move to another page 
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

  function handelChange(event:any){
      // get whatever was the last version of the array for the state, if event.target.name has the same name as the feild update that feilds value
      setStudent((previous:any)=> ({...previous, [event.target.name]: event.target.value}))
      setEmplid((event.target.name =='emplid') ? event.target.value : emplid)
      console.log(student);
      console.log(emplid);
  }


  const handelSubmit = async (event:any) => {
          try{
                  event.preventDefault(); // stop page from reloading
                  const response = await axios.put("http://localhost:8000/students/"+ emplid, student);
                  const response2 = await axios.get("http://localhost:8000/students/"+ emplid); // get the sudents data
                  console.log("http://localhost:8000/students/"+ emplid);
                 console.log(response2.data[0])

                 setServerResponse(response.data)
                 //navigate("/students") // go back to the students portal page
          }catch(error){
              console.log(error);
              }
          }
      
  
  
  return(
      <div>
        <h1 className = "title">COMPUTER SCIENCE DEPARTMENT</h1>
        <h2 className = 'title'>Update a Students Records</h2>
        <div className = 'warning'>
        <p>The website is currently under maintenance. Ensure to fill all the inputs specialy the DOB, unique email, and empilid or you submission may not be recived  <br/> 
            able to submit again. We apologize for the inconvience.</p>
        </div>
        <h5 className = "table-data">{student.emplid} {student.firstName} {student.mi} {student.lastName} {(student.dob).substring(0,10)} {student.email} {student.phone}</h5>
        
        <form>
            <label className="label"> Empilid</label> <br/>
            <input id = "sf_name" type = "text" placeholder="emplid" onChange={handelChange} name="emplid"></input>
        </form>
          <form id = "form1">
              <label className= "label"> Enter a Students First Name, Middle Intial and Last Name</label> <br/>
              
              <input id = "sf_name" type = "text" placeholder="firstName" onChange={handelChange} name="firstName"></input>
              <input id = "sl_name" type = "text" placeholder="middleInit" onChange={handelChange} name="mi"></input>
              <input id = "sl_name" type = "text" placeholder="lastName" onChange={handelChange} name = "lastName"></input>
              
          </form>
  
          <form id = "form2"><br/>
        
              <label className="label"> phone number</label>
              <label className="label"> email </label>

              <br/>
              <input id = "sl_name" type = "text" placeholder = "YYYY-DD-MM" onChange={handelChange} name = "dob"></input>
              <input id = "sl_name" type = "text" placeholder = "email" onChange={handelChange} name ="email"></input>
              <input id = "sl_name" type = "text" placeholder = "phone" onChange={handelChange} name="phone"></input>
              
          </form>
          <form id = "form3"><br/>
            <label className="label"> House Number</label> 
            <label className="label"> Zipcode</label>
            <label className="label"> City </label>
            <label className="label"> State </label>
            <br/>
            
            <input className = "sf_name" type = "text" placeholder="house_number" onChange={handelChange} name="house_number"></input>
            <input className = "sl_name" type = "text" placeholder = "zipcode" onChange={handelChange} name="zipCode"></input>
            <input className = "sl_name" type = "text" placeholder = "city" onChange={handelChange} name ="city"></input>
            <input className = "sl_name" type = "text" placeholder = "state" onChange={handelChange} name= "state"></input>
        </form>
          
          <button className = "homepage-button" onClick={handelSubmit}>Submit</button>
          <button className=' homepage-button'><Link to = "/students"> Back</Link></button>
      </div>
      
  );
}

export default Update;