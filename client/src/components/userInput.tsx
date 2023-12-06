import "../Stylings/UserInput.css"
function UserInput(props:any){
    // take input from the user
    

    return(
        <div>
  

            <form id = "form1">
                <label className= "label"> Enter a Students First Name, Middle Intial and Last Name</label> <br/>
                
                <input id = "sf_name" type = "text" placeholder="firstName"></input>
                <input id = "sl_name" type = "text" placeholder="middleInit"></input>
                <input id = "sl_name" type = "text" placeholder="lastName"></input>
                <input id = "sl_name" type = "text" placeholder = "DOB"></input>

            </form>

            <form id = "form2"><br/>
                <label className="label"> Empilid</label> 
                <label className="label"> phone number</label>
                <label className="label"> email </label>
                <br/>
                
                <input id = "sf_name" type = "text" placeholder="empilid"></input>
                <input id = "sl_name" type = "text" placeholder = "phone"></input>
                <input id = "sl_name" type = "text" placeholder = "email"></input>
                <input id = "sl_name" type = "text" placeholder = "address"></input>
            </form>
            
            
            <button>Submit</button>
            
        </div>
        
    );

}

export default UserInput;