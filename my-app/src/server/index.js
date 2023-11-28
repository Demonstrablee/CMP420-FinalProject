"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const db = __importStar(require("./queries.js")); // using es modules to import common js modules
//made this file and all other js files be interperted as ES and that broke lots
const url_1 = require("url"); // lines 10- 14 are from https://stackabuse.com/bytes/fix-dirname-is-not-defined-in-es-module-scope-in-javascript-node/
const path_2 = require("path");
const __filename = (0, url_1.fileURLToPath)(import.meta.url);
const __dirname = (0, path_2.dirname)(__filename);
const app = (0, express_1.default)();
const PORT = 8000;
app.use(body_parser_1.default.json()); // read through the data that comes in the requests
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
//server the files for out build react app
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../client/build')));
// routes
app.get('/api', (request, response) => {
    response.json('we in the api page');
});
// return the react app (one of the routes)
app.get('/', (request, response) => {
    response.send("server start");
    //response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.get('/links', db.getLinks); // list all the links in the database (WORKING)
app.get('/links/:id', db.getLinkById); // get a single link from the data base (WORKING)
app.post('/links', db.createLink); // add link to data base (WORKING)
app.put('/links/:id', db.updateLink); // update an existing link in the database (WORKING)
app.delete('/links/:id', db.deleteLink); // delete a link in the data base (WORKING)
// make app listen on a port
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
