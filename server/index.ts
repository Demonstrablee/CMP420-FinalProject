import'dotenv/config'
import express from 'express'
import mysql from 'mysql2'
import path from 'path'
import cors from 'cors'

//  import bodyParser from 'body-parser'
//made this file and all other js files be interperted as ES and that broke lots
import { fileURLToPath } from 'url'; // lines 10- 14 are from https://stackabuse.com/bytes/fix-dirname-is-not-defined-in-es-module-scope-in-javascript-node/
import { dirname } from 'path';


console.log(process.env.PASSWORD)

// DATABASE CONNECTION
const db = mysql.createConnection({ // the server connecting to it
   host: "localhost",
   user : "root",
   password: "C0mputer", // dont keep this out in the open so that no one else knows what this is
   database: "CSDept"
 
}
)


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

const PORT = 8000;


// make app listen on a port
app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`);
     
})

// app.use(bodyParser.json()) // read through the data that comes in the requests
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }))

// allow user requests via json files
app.use(express.json())
// //server the files for out build react app
app.use(express.static(path.resolve( __dirname, '../client/build')));
// allows client to access server 
app.use(cors());

// return the react app  build on (one of the routes)
app.get('/reactbuild', (request:any,response: any)=>{ 
    response.send("server start");
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    
})

//QUERIES

//READ
function getStudents (request: any, response: any) { 
    const q = 'SELECT * FROM student';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })

}
function getStudentWithID (request: any, response: any) { 
    const q = 'SELECT * FROM student WHERE empilid = ?';
    const empilID = request.params.empilid;
    db.query(q,[empilID],(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })

}
function getInstructors (request: any, response: any) { 
    const q = 'SELECT * FROM instructor';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
}
function getGraduates (request: any, response: any) { 
    const q = 'SELECT * FROM graduate';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
}
function getEmployers (request: any, response: any) { 
    const q = 'SELECT * FROM employer';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
}
function getEmploymentRecs (request: any, response: any) { 
    const q = 'SELECT * FROM employmentRecord';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
}
function getCourseSections (request: any, response: any) { 
    const q = 'SELECT * FROM courseSections';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
}
function getCourses (request: any, response: any) { 
    const q = 'SELECT * FROM courses';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
}
function getDepartments (request: any, response: any) { 
    const q = 'SELECT * FROM department';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
}
function getEnrollment (request: any, response: any) { 
    const q = 'SELECT * FROM enrolledIn';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
}
function getCheatingIncidents (request: any, response: any) { 
    const q = 'SELECT * FROM cheatingIncident';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
}
function getEmployedBy (request: any, response: any) { 
    const q = 'SELECT * FROM employedBy';
    db.query(q,(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json(data)
    })
}

//POST (ADD NEW ENTERIES)
function postStudents (request: any, response: any) { 
    const q = "INSERT INTO Student(`empilid`, `f_name`, `m_name`, `l_name`, `dob`, `email`, `phone`, `address`) VALUES (?) ";
    const values: any = [
        request.body.empilid,
        request.body.f_name,
        request.body.m_name,
        request.body.l_name,
        request.body.dob,
        request.body.email,
        request.body.phone,
        request.body.address
    ];
    //SENDING QUERY
    db.query(q,[values],(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json('Student added to database')});
    };
function postInstructors (request: any, response: any) { 
        const q = "INSERT INTO Instructor(`empilid`, `f_name`, `m_name`, `l_name`, `dob`, `email`, `phone`, `address`, `officeLocation`) VALUES (?) ";
        const values: any = [
            request.body.empilid,
            request.body.f_name,
            request.body.m_name,
            request.body.l_name,
            request.body.dob,
            request.body.email,
            request.body.phone,
            request.body.address,
            request.body.officeLocation
        ];
        //SENDING QUERIE
        db.query(q,[values],(err: any,data: any)=>{
            if(err) return response.json(err)
            return response.json('Instructor added to database')});
};
    
function postCourseSect (request: any, response: any) { 
            const q = "INSERT INTO CourseSection() VALUES (?) ";
            const values: any = [
                
            ];
            //SENDING QUERIE
            db.query(q,[values],(err: any,data: any)=>{
                if(err) return response.json(err)
                return response.json('Course Section added to database')});
};
function postEmployer (request: any, response: any) { 
        const q = "INSERT INTO CourseSection() VALUES (?) ";
        const values: any = [
                    
                ];
                //SENDING QUERIE
        db.query(q,[values],(err: any,data: any)=>{
            if(err) return response.json(err)
            return response.json('Course Section added to database')});
};

function postGraduates (request: any, response: any) { 
    const q = "INSERT INTO Graduate() VALUES (?) ";
    const values: any = [
                        
    ];
    //SENDING QUERY
    db.query(q,[values],(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json('Graduate added to database')});
};
function postEmploymentRec (request: any, response: any) { 
    const q = "INSERT INTO CourseSection() VALUES (?) ";
    const values: any = [
                        
    ];
    //SENDING QUERIE
    db.query(q,[values],(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json('Employment Record added to database')});
};
function postDept (request: any, response: any) { 
    const q = "INSERT INTO Department() VALUES (?) ";
    const values: any = [
                            
    ];
    //SENDING QUERY
    db.query(q,[values],(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json('Department added to database')});
};
function postEmployedBy (request: any, response: any) { 
    const q = "INSERT INTO CourseSection() VALUES (?) ";
    const values: any = [
                                
    ];
            //SENDING QUERY
     db.query(q,[values],(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json('Employed by Relationship added to database')});
};

function postEnrolledIn (request: any, response: any) { 
    const q = "INSERT INTO EnrolledIn() VALUES (?) ";
    const values: any = [
                                    
        ];
                //SENDING QUERY
    db.query(q,[values],(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json('Enrolled in Relationship added to database')});
};
        
function postCheatingIncident (request: any, response: any) { 
    const q = "INSERT INTO CheatingIncident() VALUES (?) ";
    const values: any = [
                                    
    ];
    //SENDING QUERY
        db.query(q,[values],(err: any,data: any)=>{
            if(err) return response.json(err)
            return response.json('Cheating Incident added to database')});
};
        
// DELETE
function deleteStudent(request: any,response: any){
    const empilID = request.params.empilid;
    const q = "DELETE FROM student WHERE empilid = ?"

    db.query(q,[empilID],(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json('Student was deleted')});
}

//UPDATE
function updateStudent(request: any,response: any){
    const empilID = request.params.empilid;
    const q = "UPDATE student SET `f_name` = ?, `m_name` = ?, `l_name` = ?, `dob`= ?, `email`= ?, `phone`= ?, `address` = ? WHERE empilid = ?"
    const values: any = [
        request.body.f_name,
        request.body.m_name,
        request.body.l_name,
        request.body.dob,
        request.body.email,
        request.body.phone,
        request.body.address
    ];
    db.query(q,[...values,empilID],(err: any,data: any)=>{
        if(err) return response.json(err)
        return response.json('Student was Updated')});
}

// ROUTES

//(CREATE)POST
app.post('/students', postStudents) // add link to data base (WORKING)
app.post('/instructors', postInstructors)
app.get('/backend', (request:any,response: any)=>{ 
    response.json('ELLO this is the backend')
})
//(READ)GET 
app.get('/students', getStudents) // list all the links in the database (WORKING)
app.get('/students/:empilid', getStudentWithID) // get one specific student (WORKING)
app.get('/instructors', getInstructors)

//UPDATE
 app.put('/students/:empilid', updateStudent) // update an existing link in the database (WORKING)

//DELETE
app.delete('/students/:empilid', deleteStudent) // delete a link in the data base (WORKING)
