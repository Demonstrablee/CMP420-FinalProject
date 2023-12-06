import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import '../Stylings/Options.css';
const Options = () => {
    return (_jsxs("div", { children: [_jsx("div", { id: "div1", children: _jsx("h1", { className: "title", children: "COMPUTER SCIENCE DEPARTMENT" }) }), _jsx("div", { id: 'warning', children: _jsxs("p", { children: ["The Website is currently under maintenance. The systems for Departments, Instructors and ", _jsx("br", {}), "Cheating Incidents are down at the moment we apologize for the temporary inconvience "] }) }), _jsxs("div", { children: [_jsx("button", { className: "homepage dept", children: "Departments" }), _jsx("button", { className: "homepage instructor", children: "Instructors" }), _jsx("button", { className: "homepage student", children: _jsx(Link, { to: "/students", children: "Students" }) })] }), _jsx("div", { children: _jsx("button", { className: "homepage incident", children: "Cheating Incidents" }) }), _jsx("button", { className: ' homepage return', children: _jsx(Link, { to: "/", children: " Back to Home" }) })] }));
};
export default Options;
