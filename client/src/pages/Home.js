import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../Stylings/Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (_jsxs("div", { children: [_jsx("div", { id: "div1", children: _jsx("h1", { className: "title", children: "COMPUTER SCIENCE DEPARTMENT" }) }), _jsxs("div", { id: "div2", children: [_jsx("button", { className: "homepage dept", children: _jsx(Link, { to: "/options", children: "Departmental Affairs" }) }), _jsx("button", { className: "homepage student", children: "Student Life" })] })] }));
};
export default Home;
