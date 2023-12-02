import express from 'express'
import mysql from 'mysql2'
import path from 'path'

//  import bodyParser from 'body-parser'
//made this file and all other js files be interperted as ES and that broke lots
import { fileURLToPath } from 'url'; // lines 10- 14 are from https://stackabuse.com/bytes/fix-dirname-is-not-defined-in-es-module-scope-in-javascript-node/
import { dirname } from 'path';



// DATABASE CONNECTION
const db = mysql.createConnection({ // the server connecting to it
   host: "localhost",
   user : "root",
   password: process.env.PASSWORD, // dont keep this out in the open so that no one else knows what this is
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
 

// //server the files for out build react app

app.use(express.static(path.resolve( __dirname, '../client/build')));

// return the react app  build on (one of the routes)
app.get('/reactbuild', (request:any,response: any)=>{ 
    response.send("server start");
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    
})

//QUERIES

function getStudents (request: any, response: any) { 
    const q = 'SELECT * FROM student';
    db.query(q,(err: any,data: any)=>{
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

  


// ROUTES
app.get('/backend', (request:any,response: any)=>{ 
    response.json('ELLO this is the backend')
})

app.get('/students', getStudents) // list all the links in the database (WORKING)
// app.get('/links/:id', db.getLinkById) // get a single link from the data base (WORKING)

// app.post('/links', db.createLink) // add link to data base (WORKING)
// app.put('/links/:id', db.updateLink) // update an existing link in the database (WORKING)
// app.delete('/links/:id', db.deleteLink) // delete a link in the data base (WORKING)
