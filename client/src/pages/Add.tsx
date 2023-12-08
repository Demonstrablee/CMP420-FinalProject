import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = (props: any) => {

  const [student, setStudent]:[any,any] = useState({
    emplid: "",
    firstName: "",
    mi: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    house_number: "",
    street: "",
    city: "",
    zipCode: "",
    state: ""
}
);
const[serverResponse, setServerResponse] = useState("");
const navigate = useNavigate() // move to another page 
var response: any;

function handelChange(event:any){
    // get whatever was the last version of the array for the state, if event.target.name has the same name as the feild update that feilds value
    setStudent((previous:any)=> ({...previous, [event.target.name]:event.target.value}))
    console.log(student)
    
}
const handelSubmit = async (event:any) => {
        try{
                
                event.preventDefault(); // stop page from reloading
                response = await axios.post("http://localhost:8000/students", student);
                console.log("http://localhost:8000/students");
                
                console.log(response.data);
                setServerResponse(response.data.sqlMessage)
   ;
                //navigate("/students");
        }catch(error){
            console.log(error);
     
            }
        }
    


return(
    <div>
      <h1 className = "title">COMPUTER SCIENCE DEPARTMENT</h1>
      <h2 className = 'title'>Add a Student Record</h2>
      <div className = 'warning'>
        <p>The website is currently under maintenance. Note on submission of an empilid and email that
            exist in the database that <br/> you may encounter a crash. Please reload the webpage to be
            able to submit again. We apologize for the inconvience. </p>
        </div>
        <h1 className='title'>{(serverResponse == null)? "Student Added Sucessfully": serverResponse}</h1>
        <form>
            <label className="label"> Emplid</label> <br/>
            <input id = "sf_name" type = "text" placeholder="emplid" onChange={handelChange} name="emplid"></input>
        </form>
          <form id = "form1">
              <label className= "label"> Enter a Students First Name, Middle Intial and Last Name</label> <br/>
              
              <input className = "sf_name" type = "text" placeholder="firstName" onChange={handelChange} name="firstName"></input>
              <input className = "sl_name" type = "text" placeholder="middleInit" onChange={handelChange} name="mi"></input>
              <input className = "sl_name" type = "text" placeholder="lastName" onChange={handelChange} name = "lastName"></input>
              
          </form>
  
          <form id = "form2"><br/>
        
              <label className="label"> phone number</label>
              <label className="label"> email </label>

              <br/>
              <input className = "sl_name" type = "text" placeholder = "YYYY-DD-MM" onChange={handelChange} name = "dob"></input>
              <input className = "sl_name" type = "text" placeholder = "email" onChange={handelChange} name ="email"></input>
              <input className = "sl_name" type = "text" placeholder = "phone" onChange={handelChange} name="phone"></input>
              
          </form>
          <form id = "form3"><br/>
            <label className="label"> House Number</label> 
            <label className="label"> Zipcode</label>
            <label className="label"> City </label>
            <label className="label"> State </label>
            <br/>
            
            <input type = "text" placeholder="house_number" onChange={handelChange} name="house_number"></input>
            <input className = "sl_name" type = "text" placeholder = "zipCode" onChange={handelChange} name="zipcode"></input>
            <input className = "sl_name" type = "text" placeholder = "city" onChange={handelChange} name ="city"></input>
            <input className = "sl_name" type = "text" placeholder = "state" onChange={handelChange} name= "state"></input>
        </form>
        
        
        <button className = "homepage-button"onClick={handelSubmit}>Submit</button>
        <button className =' homepage-button'><Link to = "/students"> Back</Link></button>
    </div>
    
);
}

export default Add


