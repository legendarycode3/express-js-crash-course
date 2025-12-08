/**
 * BRINGING "express.js"  AND  INITIALIZATE IT
 * 
 * using the "commonjs" syntax, which is the native Node Module synta (which i will still use the "ES Module" syntax later) 
 */

// USING "common js" for express
// const express = require('express');

//USING "import " WITH "ES module" for express
import express from 'express';



//IMPORTING logger.js (MEXTERNAL MIDDLEWARE) WHICH WAS EXPORTED HERE TO BE USED 
import logger from './middleware/logger.js';




// const PORT = 8000;

// USING "common js" for path
//const path = require('path');

//USING "import" WITH "ES module" for Path
import path from 'path';



import { fileURLToPath } from 'url';




// USING "common js" for router
//const postRoutes = require('./routes/posts');

//IMPORTING THE ROUTER WITH "ES module" for router
// import postRoutes from './routes/postsRoutes.js';
import postRoutes from './routes/postsRoutes.js';

// import loggerRoutes from './routes/loggerMiddleware.js';




import errorHandler from './middleware/error.js';



import notFound from './middleware/notFound.js';


// INITIALIZING THE express()
const app = express();




// // // 1st FUNCTION -- 1st middleware here
// // function myLogger(req, res, next){
// //     console.log(`${req.method} ${req.url}`);
// //     next();
// // }

// //2nd FUNCTION - for loggeer middleware
// const  myLogger = (req, res, next) => {
//     console.log(`${req.method} ${req.url} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }




/** INSTEAD OF HARD CODING THIS "PORT" , LETS USE THE .env FILE , TO ACCESS THE PORT  */
const PORT = process.env.PORT || 8080;




// GETTING THE DIRECTORY NAME
const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);
const __dirname = path.dirname(__filename);  





/**
 * - HOW TO GET DATA FROM THE REQUEST "body" -
 *  USING BODY  PARSER MIDDLEWARE
 */
// FOR PARSING application/json (THIS WILL TAKE CARE OF BEEN ABLE TO SUBMIT "raw" JSON)
app.use(express.json());



//FOR PARSING application(FOR SENDING URL ENCODED DATA) x-www-form-urlencoded 
app.use(express.urlencoded({ extended: false}))




//"logger" MIDDLEWARE (THE WILL USE THE MIDDLEWARE, FOR ALL THE REQUEST ON THE APPLICATION)
app.use(logger);



//SETUP STACTIC FOLDER - MAKE SURE TO "import" url
app.use(express.static(path.join(__dirname, 'public')));



//ROUTES
app.use('/api/posts', postRoutes);



//"notFound()" EXTERNAL FUNCTION  CATCH ALL MIDDLEWARE HERE (MEANING, TI GOING TO CATCH OTHER ERROR THAT ARE FOUND OUTSIDE THE ONCES DONE WITH THE ("POST", "GET", "PUT", "DELETE" REQUESTS, ON THE ROUTE)  , INSTEAD OF DISPLAYING A HTML TAG TEXTs 
// ERROR HANDLER - AS WELL
app.use(notFound);


//ERROR HANDLER (error middleware)
app.use(errorHandler);





/**
 * STATIC SERVER (middleware) CCREATED ON EXPRESS.js
 * 
 */
//SETTING-UP  STATIC  FOLDER
//app.use(express.static(path.join(__dirname, 'public')));



// //HANDLES "GET" REQUEST TO THE ROOT PATH
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     //res.send('Hi, This is LegendaryCode, Williams');
//     //res.send({some: 'Welcome'});
// });

// //HANDLES "GET" REQUEST TO THE PATH  /about
// app.get('/about', (req, res) => {
//      res.sendFile(path.join(__dirname, 'public', 'about.html'));
//     //res.send('Hi Everything about this page is this');
//     //res.send({some: 'Welcome'});
// });




// // LETS ASSUME WE ARE FETCHING THIS DATA FROM A DATA 
// let posts = [
//     { id: 1, title: 'First Post'},
//     { id: 2, title: 'Second Post'},
//     { id: 3, title: 'Third Post'},
//     { id: 4, title: 'Fouth Post'},
//     { id: 5, title: 'Fifth Post'},
//     { id: 6, title: 'Six Post'},
// ];






// /**
//  * EXAMPLE OF "GET" ROUTE , TO RECIEVCE  "JSON" DATA
//  */

// // "GET" request , TO "GET" ALL POSTS
// app.get('/api/posts', (req, res) => {
//     // GETTING THE "Query String"
//     const limit = parseInt(req.query.limit);
//     if(!isNaN(limit) && limit > 0 ){
//         res.status(200); 
//         res.json(posts.slice(0, limit));
//     }
//     else {
//         res.status(200);
//         res.json(posts);
//     }
//     // res.json(posts);
// });



// // "GET" SINGLE POST
// app.get('/api/posts/:id', (req, res) => {
//     // ACCESSING THE "id" FROM req.params
//     const id = parseInt(req.params.id);
     
//     // find() ARRAY METHOD , WILL WORK HERE SINCE WE JUST GETTING ONE 1 VALUE
//     // const post = posts.filter((pos) => pos.id === id);
//     const post = posts.find((pos) => pos.id === id);
//     if(!post)
//     {
//         res.status(404);
//         res.json({message: `A post with the id of ${id} was not found`});
//     }
//     else {
//         res.status(200);
//         res.json(post);
//     }

//     // res.status(200);

//     // res.json(post);
// });







// app.listen(6000);
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});


