// USING "common js" for express
// const express = require('express');

//USING "import " WITH "ES module" for express
import express from 'express';



import {getPosts, getPost, createPost,updatePost, deletePost} from '../controllers/postRouters-Controllers.js'


const router  = express.Router();




// LETS ASSUME WE ARE FETCHING THIS DATA FROM A DATA 
// WE ARE USING "let" INSTEAD OF "const" HERE, BECUS WE WILL BE DELTING WITH "DELETE " REQUEST & ALSO "PUT" REQUEST TO CHANGE THE VALUE
//// MOVED THIS TO "postRouters-Controller.js" file . TO SEPEARTE CODES & IMPORT THEM BACK TO THIS FILE HERE
// let posts = [
//     { id: 1, title: 'First Post'},
//     { id: 2, title: 'Second Post'},
//     { id: 3, title: 'Third Post'},
//     { id: 4, title: 'Fouth Post'},
//     { id: 5, title: 'Fifth Post'},
//     { id: 6, title: 'Six Post'},
// ];







/**
 * EXAMPLE OF "GET" ROUTE , TO RECIEVCE  "JSON" DATA
 */

////router.GET() (Becus we are using the ES MODULE, not app.GET() again)

//// MOVED THIS TO "postRouters-Controller.js" file . TO SEPEARTE CODES & IMPORT THEM BACK TO THIS FILE HERE

//// "GET" REQUEST , TO "GET" -  ALL POSTS
// router.get('/', (req, res, next) => {
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
router.get('/', getPosts);





//// "GET" REQUEST   FOR GETTING - SINGLE POST BY(id)
//// MOVED THIS TO "postRouters-Controller.js" file . TO SEPEARTE CODES (FOR GETTING "SINGLE POST") & IMPORT THEM BACK TO THIS FILE HERE
// router.get('/:id', (req, res, next) => {
//     // ACCESSING THE "id" FROM req.params
//     const id = parseInt(req.params.id);
     
//     // find() ARRAY METHOD , WILL WORK HERE SINCE WE JUST GETTING ONE 1 VALUE
//     // const post = posts.filter((pos) => pos.id === id);
//     const postt = posts.find((pos) => pos.id === id);
//     if(!postt)
//     {
//         /**
//          * INSTEAD OF PUTTING THIS statuscode(404), LET IT HAPPEN IN THE "ERROR HANDLER"
//          * #ALSO ADD "next" IN THE () PARANTHESIS, FOR THE POST REQUEST
//         */
//         // res.status(404);
//         // res.json({message: `A post with the id of ${id} was not found`});
//        const error = new Error(`A post with the ID: ${id} ,was not found`);
//        error.status = 404;
//         //return next(error);
//          next(error);
//     } 
//     else {
//         res.status(200);
//         res.json(postt);
//     }

//     // res.status(200);

//     // res.json(post);
// });
router.get('/:id', getPost);





/**
 *  "POST" REQUEST
 */
////  "POST" REQUEST (CREATE) FOR CREATING -  NEW POST  
//// MOVED THIS TO "postRouters-Controller.js" file . TO SEPEARTE CODES (FOR CREATING  A " POST") & IMPORT THEM BACK TO THIS FILE HERE
//// (IN REALITY WE WILL BE ADDING IT TO THE DATABASE, AND THE DATABASE WILL GIVE YOU THE "id" etc.)
// router.post('/', (req, res, next) => {
//     //console.log(req.body);
    
//     const newPost = {
//         id: posts.length + 1,
//         title: req.body.title
//     };
//     //newPost = JSON.parse(body);

//     // (!newPost)IF THE "newPost" THOSE NOT HAVE A TITLE
//     if (!newPost.title){
//         // res.status(400);
//         // res.json({message: 'Please , include a title'});

//         // const error = new Error(`A post with the ID: ${id} ,was not found`);
//         const error = new Error(`please include a title`);
//         error.status = 400;
//         return next(error);
//         // next(error);

//         //return res.status(400).json({message: 'Please , include a title'});
//     }
//     else{
        
//         posts.push(newPost)
//         res.status(201);
//         res.json(posts);
//         //res.status(201).json(posts);
//     }

//     // res.status(201).json(posts);
// });
router.post('/',createPost);






////  "PUT" REQUEST (UPDATE), FOR UPDATING -  A POST 
//// MOVED THIS TO "postRouters-Controller.js" file . TO SEPEARTE CODES FOR  (UPDATING  A "POST") & IMPORT THEM BACK TO THIS FILE HERE
// router.put('/:id', (req, res, next) => {
//     // ACCESSING THE "id" FROM req.params
//     const id = parseInt(req.params.id);

//     // find() ARRAY METHOD , FINDIN & UPDATING ONE VALUE WILL WORK HERE SINCE WE JUST GETTING ONE 1 VALUE
//     const postt = posts.find((pos) => pos.id === id);

//     if(!postt){
//         // res.status(404);
//         // res.json({message: `A post with the id of ${id} was not found`});

//         //return res.status(404).json({message: `A post with the id of ${id} was not found`});

//         // FOR "ERROR HANDLING" ON - "PUT REQUEST" (UPDATING)
//         const error = new Error(`please this ID: ${id} is not available, in otherwords, we can't UPDATE`);
//         error.status = 400;
//         return next(error);
//         // next(error);
//     }
//     else{
//         //postt = req.body;
//         postt.title = req.body.title;
//         res.status(200);
//         res.json(posts);
//         //res.status(200).json(posts);
//     }

// });
router.put('/:id', updatePost);






////  "DELETE" REQUEST (DELETE), FOR DELETING -  A POST
//// MOVED THIS TO "postRouters-Controller.js" file . TO SEPEARTE CODES FOR  (DELETING  A "POST") 
router.delete('/:id', deletePost);




/**
 * MAKING SURE TO EXPORT THE ROUTER
 */
// USING "common js" for router
// module.exports = router;

//USING "import " WITH "ES module" for router
export default  router;