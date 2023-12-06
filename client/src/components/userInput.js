import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../Stylings/UserInput.css";
function UserInput(props) {
    // take input from the user
    return (_jsxs("div", { children: [_jsxs("form", { id: "form1", children: [_jsx("label", { className: "label", children: " Enter a Students First Name, Middle Intial and Last Name" }), " ", _jsx("br", {}), _jsx("input", { id: "sf_name", type: "text", placeholder: "firstName" }), _jsx("input", { id: "sl_name", type: "text", placeholder: "middleInit" }), _jsx("input", { id: "sl_name", type: "text", placeholder: "lastName" }), _jsx("input", { id: "sl_name", type: "text", placeholder: "DOB" })] }), _jsxs("form", { id: "form2", children: [_jsx("br", {}), _jsx("label", { className: "label", children: " Empilid" }), _jsx("label", { className: "label", children: " phone number" }), _jsx("label", { className: "label", children: " email " }), _jsx("br", {}), _jsx("input", { id: "sf_name", type: "text", placeholder: "empilid" }), _jsx("input", { id: "sl_name", type: "text", placeholder: "phone" }), _jsx("input", { id: "sl_name", type: "text", placeholder: "email" }), _jsx("input", { id: "sl_name", type: "text", placeholder: "address" })] }), _jsx("button", { children: "Submit" })] }));
}
export default UserInput;
