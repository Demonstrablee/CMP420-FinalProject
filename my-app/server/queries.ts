// connect to postgres database using node-postgres package
// Table - users-> links
// column1 name -> name
// column2 email -> URL
// id -> id
// import POOL from 'pg'

// const Pools = POOL.Pool

// const pool = new Pools({ // the server connecting to it
//     user : 'me',
//     host: 'localhost',
//     database: 'favlinks',
//     password: 'password', // dont keep this out in the open so that no one else knows what this is
//     port: 5432
// }
// )

// //console.log(pool) {"name": "google", "URL": "www.google.com" }
// // INSERT INTO links (name, URL) VALUES ('google', 'www.google.com');

// // GET REQUEST FOR ALL NAMES
// export function getLinks (request: any, response: any) { 
//     pool.query('SELECT * FROM links ORDER BY id ASC', (error: any, results: { rows: any }) => {
//       if (error) {
//         throw error
//       }
//       console.log((results.rows).json)
//       response.status(200).json(results.rows)
//     })
//   }

//   //GET A SINGLE NAME
//   export  function getLinkById (request:any, response:any) {
//     const id = parseInt(request.params.id)
  
//     pool.query('SELECT * FROM links WHERE id = $1', [id], (error: any, results: { rows: any }) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

//   //POST or CREATE a new Link
//   export function createLink (request:any, response:any) {
//     const {name ,URL} = request.body
  
//     pool.query('INSERT INTO links (name, URL) VALUES ($1, $2) RETURNING *', [name, URL], (error: any, results: { rows: { id: any }[] }) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`Links added with ID: ${results.rows[0].id}`)
//     })
//   }
// //PUT UPDATED DATA INTO AN EXISTING LINK
//   export function updateLink (request:any, response:any) {
//     const id = parseInt(request.params.id)
//     const { name, URL } = request.body
  
//     pool.query(
//       'UPDATE links SET name = $1, URL = $2 WHERE id = $3',
//       [name, URL, id],
//       (error: any, results: any) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).send(`Link modified with ID: ${id}`)
//       }
//     )
//   }
// //DELETE A LINK
//   export function deleteLink (request:any, response:any) {
//     const id = parseInt(request.params.id)
  
//     pool.query('DELETE FROM links WHERE id = $1', [id], (error: any, results: any) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`Link deleted with ID: ${id}`)
//     })
//   }
  
// //EXPORT THE FUNCTIONS
// /* this export from common js doesnt work since I made the package.json interpert js files as ES
//  I did that because I kept getting the error the express module couldn't be found
//  so I just used everything imports and exports from ES
//   module.exports = {
//     getLinks,
//     getLinkById,
//     createLink,
//     updateLink,
//     deleteLink,
//   }*/