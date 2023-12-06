import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Stylings/Student.css";
const Students = () => {
    //student and "function" to set students
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                const response = await axios.get("http://localhost:8000/students"); // try to get the students
                setStudents(response.data); // get the data from the student table 
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchAllStudents();
    }, []);
    return (_jsxs("div", { children: [_jsxs("div", { id: "div1", children: [_jsx("h1", { className: "title", children: "COMPUTER SCIENCE DEPARTMENT" }), _jsx("h2", { className: 'title', children: "Student Records Portal" }), _jsx("div", { className: 'stu-table', children: _jsx("h1", { children: students.map((student) => (_jsxs("h5", { id: "table-data", children: [student.empilid, " ", student.f_name, student.m_name, student.l_name, student.dob, student.email, student.phone, student.address] })
                            // <h1>{student.f_name}</h1>
                            )) }) }, students.empilid)] }), _jsxs("div", { id: "div2", children: [_jsx("button", { className: "homepage dept", children: _jsx(Link, { to: "/Add", children: "Add a Student Record" }) }), _jsx("button", { className: "homepage dept", children: _jsx(Link, { to: "/Add", children: "Delete Student Records" }) }), _jsx("button", { className: "homepage dept", children: _jsx(Link, { to: "/Add", children: "Update Student Records" }) })] }), _jsx("button", { children: _jsx(Link, { to: "/options", children: " Back to Options" }) })] }));
};
export default Students;
