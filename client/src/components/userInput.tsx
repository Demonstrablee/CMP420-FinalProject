function UserInput(props:any){
    // take input from the user
    

    return(
        <div>
  

            <form id = "form1">
                <label> Enter a Staffs First and Last Name</label> <br/>
                
                <input id = "sf_name" type = "text"></input>
                <input id = "sl_name" type = "text"></input>

            </form>

            <form id = "form2"><br/>
                <label> Enter a Students First and Last Name</label> <br/>
                
                <input id = "sf_name" type = "text"></input>
                <input id = "sl_name" type = "text"></input>

            </form>
            
        </div>
        
    );

}

export default UserInput;