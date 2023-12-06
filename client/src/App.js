import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Stylings/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './pages/Add';
import Update from './pages/Update';
import Home from './pages/Home';
import Options from './pages/Options';
import Students from './pages/Students';
function App() {
    return (_jsx("div", { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/add", element: _jsx(Add, {}) }), _jsx(Route, { path: "/update", element: _jsx(Update, {}) }), _jsx(Route, { path: "/options", element: _jsx(Options, {}) }), _jsx(Route, { path: "/students", element: _jsx(Students, {}) })] }) }) }));
}
export default App;
