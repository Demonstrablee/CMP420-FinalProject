// import express from 'express'

//  import path from 'path'

//  import bodyParser from 'body-parser'

//  import * as db from './queries.js' // using es modules to import common js modules

//  //made this file and all other js files be interperted as ES and that broke lots
// import { fileURLToPath } from 'url'; // lines 10- 14 are from https://stackabuse.com/bytes/fix-dirname-is-not-defined-in-es-module-scope-in-javascript-node/
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


//  const app = express();

// const PORT = 8000;

// app.use(bodyParser.json()) // read through the data that comes in the requests
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }))
 

// //server the files for out build react app

// app.use(express.static(path.resolve( __dirname, '../client/build')));

// // routes

// app.get('/api', (request:any,response: any)=>{ 
//     response.json('we in the api page')
// })
// // return the react app (one of the routes)
// app.get('/', (request:any,response: any)=>{ 
//     response.send("server start");
//     //response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    
// })

// app.get('/links', db.getLinks) // list all the links in the database (WORKING)
// app.get('/links/:id', db.getLinkById) // get a single link from the data base (WORKING)

// app.post('/links', db.createLink) // add link to data base (WORKING)
// app.put('/links/:id', db.updateLink) // update an existing link in the database (WORKING)
// app.delete('/links/:id', db.deleteLink) // delete a link in the data base (WORKING)

// // make app listen on a port

// app.listen(PORT, ()=> {
//     console.log(`Server listening on ${PORT}`);
     
// })