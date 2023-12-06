import 'dotenv/config';
import express from 'express';
import mysql from 'mysql2';
import path from 'path';
import cors from 'cors';
//  import bodyParser from 'body-parser'
//made this file and all other js files be interperted as ES and that broke lots
import { fileURLToPath } from 'url'; // lines 10- 14 are from https://stackabuse.com/bytes/fix-dirname-is-not-defined-in-es-module-scope-in-javascript-node/
import { dirname } from 'path';
console.log(process.env.PASSWORD);
// DATABASE CONNECTION
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "C0mputer", // dont keep this out in the open so that no one else knows what this is
    database: "CSDept"
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 8000;
// make app listen on a port
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
// app.use(bodyParser.json()) // read through the data that comes in the requests
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }))
// allow user requests via json files
app.use(express.json());
// //server the files for out build react app
app.use(express.static(path.resolve(__dirname, '../client/build')));
// allows client to access server 
app.use(cors());
// return the react app  build on (one of the routes)
app.get('/reactbuild', (request, response) => {
    response.send("server start");
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
//QUERIES
//READ
function getStudents(request, response) {
    const q = 'SELECT * FROM student';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
function getInstructors(request, response) {
    const q = 'SELECT * FROM instructor';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
function getGraduates(request, response) {
    const q = 'SELECT * FROM graduate';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
function getEmployers(request, response) {
    const q = 'SELECT * FROM employer';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
function getEmploymentRecs(request, response) {
    const q = 'SELECT * FROM employmentRecord';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
function getCourseSections(request, response) {
    const q = 'SELECT * FROM courseSections';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
function getCourses(request, response) {
    const q = 'SELECT * FROM courses';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
function getDepartments(request, response) {
    const q = 'SELECT * FROM department';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
function getEnrollment(request, response) {
    const q = 'SELECT * FROM enrolledIn';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
function getCheatingIncidents(request, response) {
    const q = 'SELECT * FROM cheatingIncident';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
function getEmployedBy(request, response) {
    const q = 'SELECT * FROM employedBy';
    db.query(q, (err, data) => {
        if (err)
            return response.json(err);
        return response.json(data);
    });
}
//POST (ADD NEW ENTERIES)
function postStudents(request, response) {
    const q = "INSERT INTO Student(`empilid`, `f_name`, `m_name`, `l_name`, `dob`, `email`, `phone`, `address`) VALUES (?) ";
    const values = [
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
    db.query(q, [values], (err, data) => {
        if (err)
            return response.json(err);
        return response.json('Student added to database');
    });
}
;
function postInstructors(request, response) {
    const q = "INSERT INTO Instructor(`empilid`, `f_name`, `m_name`, `l_name`, `dob`, `email`, `phone`, `address`, `officeLocation`) VALUES (?) ";
    const values = [
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
    db.query(q, [values], (err, data) => {
        if (err)
            return response.json(err);
        return response.json('Instructor added to database');
    });
}
;
function postCourseSect(request, response) {
    const q = "INSERT INTO CourseSection() VALUES (?) ";
    const values = [];
    //SENDING QUERIE
    db.query(q, [values], (err, data) => {
        if (err)
            return response.json(err);
        return response.json('Course Section added to database');
    });
}
;
function postEmployer(request, response) {
    const q = "INSERT INTO CourseSection() VALUES (?) ";
    const values = [];
    //SENDING QUERIE
    db.query(q, [values], (err, data) => {
        if (err)
            return response.json(err);
        return response.json('Course Section added to database');
    });
}
;
function postGraduates(request, response) {
    const q = "INSERT INTO Graduate() VALUES (?) ";
    const values = [];
    //SENDING QUERY
    db.query(q, [values], (err, data) => {
        if (err)
            return response.json(err);
        return response.json('Graduate added to database');
    });
}
;
function postEmploymentRec(request, response) {
    const q = "INSERT INTO CourseSection() VALUES (?) ";
    const values = [];
    //SENDING QUERIE
    db.query(q, [values], (err, data) => {
        if (err)
            return response.json(err);
        return response.json('Employment Record added to database');
    });
}
;
function postDept(request, response) {
    const q = "INSERT INTO Department() VALUES (?) ";
    const values = [];
    //SENDING QUERY
    db.query(q, [values], (err, data) => {
        if (err)
            return response.json(err);
        return response.json('Department added to database');
    });
}
;
function postEmployedBy(request, response) {
    const q = "INSERT INTO CourseSection() VALUES (?) ";
    const values = [];
    //SENDING QUERY
    db.query(q, [values], (err, data) => {
        if (err)
            return response.json(err);
        return response.json('Employed by Relationship added to database');
    });
}
;
function postEnrolledIn(request, response) {
    const q = "INSERT INTO EnrolledIn() VALUES (?) ";
    const values = [];
    //SENDING QUERY
    db.query(q, [values], (err, data) => {
        if (err)
            return response.json(err);
        return response.json('Enrolled in Relationship added to database');
    });
}
;
function postCheatingIncident(request, response) {
    const q = "INSERT INTO CheatingIncident() VALUES (?) ";
    const values = [];
    //SENDING QUERY
    db.query(q, [values], (err, data) => {
        if (err)
            return response.json(err);
        return response.json('Cheating Incident added to database');
    });
}
;
// DELETE
//UPDATE
// ROUTES
//(CREATE)POST
app.post('/students', postStudents); // add link to data base (WORKING)
app.post('/instructors', postInstructors);
app.get('/backend', (request, response) => {
    response.json('ELLO this is the backend');
});
//(READ)GET 
app.get('/students', getStudents); // list all the links in the database (WORKING)
app.get('/instructors', getInstructors);
//UPDATE
// app.put('/links/:id', db.updateLink) // update an existing link in the database (WORKING)
//DELETE
// app.delete('/links/:id', db.deleteLink) // delete a link in the data base (WORKING)
