import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DataContainer from '../components/dataContainer';
import Title from '../components/title';
import { Link } from 'react-router-dom';
const Add = (props) => {
    // Post fuction here
    return (_jsxs("div", { children: [_jsx(Title, {}), _jsx("div", {}), _jsx(DataContainer, {}), _jsx("div", { children: _jsx("button", { children: _jsx(Link, { to: "/students", children: "Back to Options" }) }) })] }));
};
export default Add;
