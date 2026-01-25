**MASTERING EXPRESSJS CRASh COURSE**

**Requirement / Prerequisites** </br>
1.JavaScript fundamentals (functions, loops, objects, classes etc) </br>
2. Asynchronous programming - Promise, callbacks, async/await.  </br>
3. HTTP Basics  (Methods, status codes, etc)  </br>
4. How JSON APIs work.  </br>
5.Basic understanding of  Node.js </br>
6.NPM (Node Package Manager) </br>



➡️ **EXPRESS.JS** </br>
✔️ What is Express.js ?   is a fast, unopinionated, and minimalist back-end web
application framework for Node.js. 
It is designed to simplify and streamline the
process of building web applications and APIs using JavaScript on the server side. </br>
It's often called the de facto standard server framework for Node.js. </br>
Express.js , is a Node.js framework, which has the following attributes / characteristic : It, </br>
1) Minimal and flexible web framework for Node.js </br>
2) Used for building “Server-Side Web Applications”, “Micro Services” and “APIs” . </br>
3)The most popular framework for Node. </br>
4) Simplifies the process of handling HTTP requests and responses. </br>
5) Express is a very fast and unopinioated framework. </br>



➡️ **Opinionated Vs Unopinionated (Framework)**
✔️ Opinionated (Frameworks): </br>
1) Has a lot of rules  & conventions that you need to follow. </br>
2) Suggested ways to do things . </br>
3) Strict folder  structure. </br>
4) Suggested ways to do things . </br>
5) Strict folder  structure. </br>

✔️ Unopinionated (Frameworks): </br>
1) They  are extremely flexible (U can can structure apps how ever you want, & use what ever database, library you want). </br>
2) Different ways to do things . </br>
3) Includes the bare necessities. </br>
4) Structure folders how you want. </br>
5) Some Examples Include: Express.js , Flask, Spring . </br>

✔️ Why Developers Use Express: </br>
Developers prefer Express due to several advantages: </br>
1.) Rapid Development: It speeds up development by providing ready-to-use functions 
and simplifying common tasks, reducing the amount of code needed compared to raw Node.js. </br>
2.) JavaScript Ecosystem: Being a JavaScript framework, it allows developers to use
the same language on both the frontend and backend, which streamlines the
development process and reduces context switching. </br>
3.) Large Community & Ecosystem: A vast and active community contributes to
extensive documentation, tutorials, and a rich ecosystem of third-party plugins and middleware. </br>
4.) It offers a robust routing system . </br>
5.) It offers HTTP helpers (redirection, caching, etc.) </br>
6.) It Support for middleware to respond to HTTP requests </br>
7.) It has a templating engine for dynamic HTML rendering </br>
8.) Error handling middleware </br>

✔️ Key Characteristics: </br>
1.) Minimal and flexible </br>
2.) Unopinionated (you decide how to structure your app) </br>
3.) Lightweight and fast </br>
4.) Extensible through middleware </br>
5.) Huge ecosystem of plugins and extensions </br>


✔️ Features of Express </br>
1.) Middleware and Routing:  Define clear pathways (routes) within yourapplication to handle incoming HTTP requests (GET, POST, PUT, DELETE). </br>
2.) Minimalistic Design:  Express.js follows a simple and minimalistic design philosophy. This simplicity allows you to quickly set up a server, define


✔️ When Creating A Express.js Project: </br>
	**NOTE:** When starting a new “nodejs project”. </br>
The first 1st thing You will need to create a  “package.json” file . </br>
And we 	can do that by using an “NPM command on VSCode terminal (instead of creating it manuel)”, bellow is the following step : </br>
 npm init  </br>
![](images/package-json-file-image1.png)  </br>

The 2 Second 2nd  thing You do is to install “Express.js” & “save” it in your 	package.json 	dependencies, (in your project , use this command): </br> 
Npm install express --save </br>
<img width="743" height="475" alt="installing-express-file-img2" src="https://github.com/user-attachments/assets/11df92a4-1b64-4ca0-a829-c32375b3981d" />  </br>
<img width="678" height="420" alt="con-of-using-malware-img23" src="https://github.com/user-attachments/assets/ae9ad0a5-6515-40bd-8903-44c55d3eea6f" /> </br>

The 3 Third 3rd   thing You do is to create the gitignore file in your Code Editor (e.g VSCode): </br>
.gitignore file, allows developers to specify which files and directories should be excluded from version control (Git). This helps keep repositories tidy, preventing sensitive information from being exposed , and ensures that only essential files are tracked.   A diagram below: </br>
<img width="742" height="287" alt="creating-ignore-file-img3" src="https://github.com/user-attachments/assets/6c407f68-4bd5-400b-b017-e337d8eef7e9" /> </br>

The 4 Fouth 4th  thing” you will need to do is, “creating an entry file”. (which is your main file). E.g like index.js  , app.js. , server.js  (diagram below): </br>
<img width="712" height="352" alt="creating-an-entry-file-img4" src="https://github.com/user-attachments/assets/1be58a66-10b6-40cd-bfe0-05a0f535c719" /> </br>



➡️ **ROUTING (In Express.js) -  LESSON 1** </br>
Routing in Express.js determines how an application's endpoints (URIs) respond to client
requests based on the URL path and the specific HTTP method used (e.g., GET, POST,
PUT, DELETE).  </br>

✔️ Basic Routing : </br>
Routes are defined using methods of the express app object that correspond to HTTP
methods. The general syntax is app.METHOD(PATH, HANDLER). </br>
1.) app: An instance of the Express application. </br>
2.) METHOD: An HTTP request method in lowercase (e.g., get(), post(), put(), delete()). </br>
3.) PATH: The URL path on the server. </br>
4.) HANDLER: A callback function executed when the route is matched, typically having (req, res) arguments.  </br>


NOTE: When developing with Express.js,  the package manager you would use to install a tool that automatically restarts your server upon code changes includes: 
 npm (Node Package Manager) 3rd parrty package Or the watch flask (node watch) </br>

a) “npm install nodemon” terminal command:  Is used to install the nodemon package as a devlopment utility in a Node.js project. </br>
nodemon is a tool that monitors for changes in your source code files and automatically restarts your Node.js application when those changes are detected.
This is particularly useful during development because it eliminates the need to manually stop and restart your server everytime you make an iteration to your code.
 CommandLine Terminal Text usualy used on it is: </br>
npm start
<img width="608" height="388" alt="nodemon-installed-img5" src="https://github.com/user-attachments/assets/edc559a5-30b2-4b4f-a8f6-9c14f16de8cb" /> </br>

b) “node --watch server” adding it on the package.json file:  This is second 2nd option way of  integrating the tool that automatically restarts your server upon any code changes you make in your project. </br>
CommandLine Terminal Text usualy used on it is: </br>
npm run dev </br>
<img width="974" height="394" alt="watch-other-option-for-automatic-runing-img6" src="https://github.com/user-attachments/assets/9e0b98e6-d120-4188-bb12-b25f731d322b" /> </br>

✔️ ROUTING:  Routing in general & (specifically express.js), refers to how an application determines how to respond to client requests based on the URL (path) and HTTP method (GET, POST, PUT, DELETE, etc.). </br>
![Uploading routing-file-in-general-img7.png…]() </br>


➡️ **CUSTOM MIDDLEWARE  (In Express.js) -  LESSON 2** </br>
✔️ MiddleWare:  This are function that runs , between the “incoming request” & the “outgoing response”.  </br>
They are functions that have access to request(req) & response(res) object. You can use middleware , for :
i). For logins. </br>
ii).For authentication. </br>
iii).You can add to request object. </br>

Setting Up A Static Server In Express.js: </br> 
You will use the built-in express.static  middleware. This  middleware  allows you to serve static files such as HTML, CSS , JavaScript, Images  & other assets directly from a specified directory. </br>

✔️ How To Interact With  “JSON  api”  USING express.js : </br>
**NOTE**: When dealing with “json data”, the browser is not the best tool to use, (becus you  want to be able to test requests like GET, POST, PUT, DELETE). Which you can basically use a tool called “POSTMAN”, which is the best way to test APIs (there is a desktop Vscode extension version). </br>
<img width="645" height="447" alt="postman-integratiion-using-vscode-img8" src="https://github.com/user-attachments/assets/db42cade-523c-485f-9878-1ce3b833a191" /> </br>
Below is an Diagram results examples using both the “PostMan"(the main expected tool to use) and  the “Chrome Browser” </br>
<img width="748" height="350" alt="postman-integratiion-using-vscode-img9" src="https://github.com/user-attachments/assets/5294199a-5d91-4920-adeb-97fd5e0054a2" /> </br>

**.env File** :- The primary reason for using A .env file in a Node.js project is to manage environment variables. Which offers significant advantages for security and flexibility. </br>
E.g diagram below: </br>
<img width="688" height="224" alt="postman-integratiion-using-vscode-img10" src="https://github.com/user-attachments/assets/8e446639-142b-4f8e-ada2-0bdf5ec9d955" /> </br>
<img width="129" height="128" alt="integrating-env-img11" src="https://github.com/user-attachments/assets/5c46af29-234a-44ca-85a7-71bfb2ae6fdf" /> </br>
<img width="127" height="122" alt="integrating-env-img12" src="https://github.com/user-attachments/assets/0ea400e1-cb81-4952-bb11-aab01c3f1ee9" /> </br>
<img width="127" height="122" alt="integrating-env-img13" src="https://github.com/user-attachments/assets/e2036373-b60f-4e0c-bb6b-3851fbb01669" /> </br>



➡️ **CRUD OPERATION (CREATE, READ, UPDATE, DELETE) (In Express.js) -  LESSON 3** </br>
✔️ How To Get  All , Single File Post  From A JSON Api :- You can basically do that using the  request methods (e.g GET, POST, PUT, DELETE). But specifically we will using the “GET” request . </br>
<img width="734" height="453" alt="getting-all-files-using-getrequest-img14" src="https://github.com/user-attachments/assets/6597da28-b34c-4f4b-a2a0-016b1700d360" /> </br>
On server.js file FOR “GET” request - Reads file (example) </br>
/**
 * EXAMPLE OF "GET" ROUTE , TO RECIEVCE  "JSON" DATA
 */ </br>
const express = require('express'); </br>
const app = express(); </br>
const PORT = process.env.PORT || 8080; </br>
let posts = [
    { id: 1, title: 'First Post'},
    { id: 2, title: 'Second Post'},
    { id: 3, title: 'Third Post'},
    { id: 4, title: 'Fouth Post'},
    { id: 5, title: 'Fifth Post'},
    { id: 6, title: 'Six Post'},
]; </br>
// "GET" request , TO "GET" ALL POSTS </br>
app.get('/api/posts', (req, res) => { </br>
    // GETTING THE "Query String" </br>
    const limit = parseInt(req.query.limit);  </br>
    if(!isNaN(limit) && limit > 0 ){ </br>
        res.status(200);  </br>
        res.json(posts.slice(0, limit));  </br>
    } </br>
    else { </br>
        res.status(200); </br>
        res.json(posts); </br> 
    } </br>
    // res.json(posts); </br>
}); </br>

// "GET" SINGLE POST </br>
app.get('/api/posts/:id', (req, res) => { </br>
    // ACCESSING THE "id" FROM req.params </br>
    const id = parseInt(req.params.id); </br>
    const post = posts.filter((pos) => pos.id === id);
    res.json(post); </br>
}); </br>

app.listen(PORT, () => { </br>
    console.log(`Server running on Port ${PORT}`); </br>
}); </br>

✔️ Getting Query Strings :- You can  use this trick to do so (below): </br>
// "GET" request , TO "GET" ALL POSTS </br>
app.get('/api/posts', (req, res) => { </br>
    // GETTING THE "Query String" </br>
    const limit = parseInt(req.query.limit); </br>
    if(!isNaN(limit) && limit > 0){ </br>
        res.json(posts.slice(0, limit)); </br>
    } </br>
    else { </br>
        res.json(posts); </br>
    } </br>
    // res.json(posts); </br>
}); </br>
<img width="710" height="375" alt="geting-query-strings-img15" src="https://github.com/user-attachments/assets/e1700d6d-c2b8-48e4-9a03-d86bc6b24e75" /> </br>
<img width="685" height="308" alt="geting-query-strings-img16" src="https://github.com/user-attachments/assets/92c57dfd-e526-4807-b270-7894b7ae8eee" /> </br>

✔️ Routes Organizing In A Different File:  To organize routes in Express.js  by creating a routes folder with a routes.js or posts.js etc. File inside , follow the steps below: </br>
NOTE: We are still using “common js”, which is the native module system for nodejs. We are not using “ES module” yet. 
And if you want to change to “ES module”, just go to package.json file,  and set </br>
“type”: “module”  </br>
1) 1st  Create the routes folder and route.js for posts.js file:- Create a new folder named routes in the root of your project. Inside this folder , create a file named routes.js or posts.js etc. </br>
<img width="444" height="374" alt="rout-organizing-in-different-files-img17" src="https://github.com/user-attachments/assets/2177f5b2-002f-45e2-af12-28a6d36ac1c0" /> </br>
2) Define routes in post.js :- In the routes/posts.js , use express.js.Router() to  create a modular, mountable route handler. Define your routes using this router instance. </br>   
<img width="506" height="293" alt="rout-organizing-in-different-files-img18" src="https://github.com/user-attachments/assets/42d1dbf9-e282-4711-8af8-106db8c3a17d" />
//ON  routes/posts.js file </br>
const express = require('express'); </br>
const router  = express.Router(); </br>
// LETS ASSUME WE ARE FETCHING THIS DATA FROM A DATA  </br>
let posts = [
    { id: 1, title: 'First Post'},
    { id: 2, title: 'Second Post'},
    { id: 3, title: 'Third Post'},
    { id: 4, title: 'Fouth Post'},
    { id: 5, title: 'Fifth Post'},
    { id: 6, title: 'Six Post'},
]; </br>

3) Import and use the router in your main application file (e.g., server.js or app.js) :-
In your main app file , require the route.js file and mount  the router using app.use() . </br>

const express = require('express'); </br>
// INITIALIZING THE express() </br>
const app = express(); </br>

//IMPORTING THE ROUTER </br>
const postRoutes = require('./routes/posts'); </br>

/** INSTEAD OF HARD CODING THIS "PORT" , LETS USE THE .env FILE , TO ACCESS THE PORT  */ </br>
const PORT = process.env.PORT || 8080; </br>

//ROUTES (ALL ROUTES DEFINED IN postRoutes will be postfixed  with ‘/api/posts’ ) </br>
app.use('/api/posts', postRoutes); </br>
app.listen(PORT, () => { </br>
    console.log(`Server running on Port ${PORT}`); </br>
}); </br>

✔️ How To Create Data From The Request Body (POST Request):  To facilitate the handling of incoming request bodies.  It parses various types of data sent in HTTP request bodies , such as  JSON, URL-encoded form data , raw data and text, and makes the data accessible on req.body  object within Express application. </br>

On server.js file FOR “POST” request - create (example) </br>
/** </br>
 * - HOW TO GET DATA FROM THE REQUEST "body" -
 *  USING BODY  PARSER MIDDLEWARE
 */ </br>

// FOR PARSING application/json (THIS WILL TAKE CARE OF BEEN ABE TO SUBMIT "raw" JSON) </br>
app.use(express.json()); </br>
<img width="594" height="385" alt="creating-data-from-a-request-body-post-request-img19" src="https://github.com/user-attachments/assets/3a8036f8-f6a2-4cae-9418-0be020bb0f0f" />

//FOR PARSING application(FOR SENDING URL ENCODED DATA) x-www-form-urlencoded  </br>
app.use(express.urlencoded({ extended: false})) </br>
<img width="658" height="329" alt="creating-data-from-a-request-body-post-request-img20" src="https://github.com/user-attachments/assets/29e158be-3c14-4b61-af2a-4b3624b4cd39" />

On The router folder (post.js)  file FOR “POST” request - create  (example) </br>
//  CREATE  NEW POST  </br>
// (IN REALITY WE WILL BE ADDING IT TO THE DATABASE, AND THE DATABASE WILL GIVE YOU THE "id" etc.) </br>
router.post('/', (req, res) => { </br>
    //console.log(req.body); </br>
    
    const newPost = { </br>
        id: posts.length + 1, </br>
        title: req.body.title </br>
    }; </br>
    //newPost = JSON.parse(body); </br>

    // (!newPost)IF THE "newPost" THOSE NOT HAVE A TITLE </br>
    if (!newPost.title){ </br>
        res.status(400); </br>
        res.json({message: 'Please , include a title'}); </br>
        //return res.status(400).json({message: 'Please , include a title'}); </br>
    } </br>
    else{ </br>
        posts.push(newPost) </br>
        res.status(201); </br>
        res.json(posts); </br>
        //res.status(201).json(posts); </br>
    } </br>

    // res.status(201).json(posts); </br>
}); </br>

✔️ How To “Update Data” From The Request Body (PUT Request):   </br>
To facilitate the handling of incoming request bodies.  It parses various types of data sent in HTTP request bodies , such as  JSON, URL-encoded form data , raw data and text, and makes the data accessible on req.body  object within Express application. </br>
On server.js  file,  FOR “PUT” request - update   (example) </br>
/** </br>
 * - HOW TO GET DATA FROM THE REQUEST "body" -
 *  USING BODY  PARSER MIDDLEWARE
 */ </br>
// FOR PARSING application/json (THIS WILL TAKE CARE OF BEEN ABLE TO SUBMIT "raw" JSON) </br>
app.use(express.json()); </br>

//FOR PARSING application(FOR SENDING URL ENCODED DATA) x-www-form-urlencoded </br>
app.use(express.urlencoded({ extended: false})) </br>

On The router folder (post.js) file FOR “PUT” request - update  (example) </br>
//  "PUT" REQUEST (UPDATE), FOR UPDATING -  A POST  </br>
router.put('/:id', (req, res) => { </br>
    // ACCESSING THE "id" FROM req.params </br>
    const id = parseInt(req.params.id); </br>

    // find() ARRAY METHOD , FINDING & UPDATING ONE VALUE WILL WORK HERE SINCE WE JUST GETTING ONE 1 VALUE </br>
    const postt = posts.find((pos) => pos.id === id); </br>

    if(!postt){ </br>
        res.status(404); </br>
        res.json({message: `A post with the id of ${id} was not found`}); </br>
        //return res.status(404).json({message: `A post with the id of ${id} was not found`}); </br>
    } </br>
    else{
        //postt = req.body; </br>
        postt.title = req.body.title; </br>
        res.status(200); </br>
        res.json(posts); </br>
        //res.status(200).json(posts); </br>
    } </br>
}); </br>
<img width="698" height="346" alt="creating-data-from-a-request-body-post-request-img21" src="https://github.com/user-attachments/assets/103e1bb5-86fb-463d-8fdc-b17647e850a7" /> </br>

✔️ How To “Delete” A Post  (DELETE Request):  </br>
To “DELETE” data using Delete request in Express.js, follow these steps: below </br>

On server.js  file,  FOR “DELETE” request - Delete (example) </br>
//USING "import " WITH "ES module" for express </br>
import express from 'express'; </br>

// INITIALIZING THE express() </br>
const app = express(); </br>

// FOR PARSING application/json (THIS WILL TAKE CARE OF BEEN ABLE TO SUBMIT "raw" JSON) </br>
app.use(express.json()); </br>

//FOR PARSING application(FOR SENDING URL ENCODED DATA) x-www-form-urlencoded </br>
app.use(express.urlencoded({ extended: false})) </br>

const PORT = process.env.PORT || 8080; </br>

//ROUTES </br>
app.use('/api/posts', postRoutes); </br>

On The router folder (post.js) file FOR “DELETE” request - Delete (example) </br>
//  "DELETE" REQUEST (DELETE), FOR DELETING -  A POST </br>
router.delete('/:id', (req, res) => { </br>
    // CONVERTING TO NUMBER, THE (id) IF IT APPEARS AS LETTER </br>
    // ACCESSING THE "id" FROM req.params </br>
    const id = parseInt(req.params.id); </br>

    // find() ARRAY METHOD , FINDIN & UPDATING ONE VALUE WILL WORK HERE SINCE WE JUST GETTING ONE 1 VALUE </br>
    const postt = posts.find((pos) => pos.id === id); </br>

    // if(!postt){ </br>
    //     res.status(404); </br>
    //     res.json({message: `A post with the ID: ${id}, was not found, when trying to DELETE`}); </br>
    // }else { </br>
    //     posts.splice(postt, 1); </br>
    //     //posts = posts.filter((pos) => pos !== id); </br>
    //     res.status(200); </br>
    //     res.json(`Deleted Sucessfully ID: ${id}`); </br>
    // } </br>

    // OR </br>
    if(!postt){ </br>
        res.status(404); </br>
        res.json({message: `A post with the ID: ${id}, was not found, when trying to DELETE`}); </br>
        // return res.status(200).json({message: `A post with the ID: ${id}, was not found, when trying to DELETE`}); </br>
    }else { </br>

        //posts.splice(postt, 1); </br>
        posts = posts.filter((pos) => pos.id !== id); </br>
        res.status(200); </br>
        //res.json(`Deleted Sucessfully ID: ${id}`); </br>
        res.json(posts); </br>
    } </br>
}); </br>
<img width="784" height="368" alt="how-to-delete-file-delete-request-img22" src="https://github.com/user-attachments/assets/49750ebd-0f8c-4d75-9ae3-93efaf91250d" /> </br>



➡️ **CONTINUEATION OF “CUSTOM MIDDLEWARE”  (In Express.js) -  LESSON 4** </br>
✔️ MiddleWare:  This are function that runs , between the “incoming request” & the “outgoing response”. </br>
They are functions that have access to request(req) & response(res) object. You can use middleware , for : </br>
i). For logins. </br>
ii). For authentication. </br>
iii). You can add to request object. </br>

On logger.js  file On MiddleWare Folder,  FOR “LOGGER MIDDLEWARE” IMPLEMENTATION (example) </br>
<img width="222" height="138" alt="image" src="https://github.com/user-attachments/assets/a9b24e23-c3e6-42ed-a75b-150a875da1e2" /> </br>
// // 1st FUNCTION -- 1st middleware here </br>
// function myLogger(req, res, next){ </br>
//     console.log(`${req.method} ${req.url}`); </br>
//     next(); </br>
// } </br>

//2nd FUNCTION - for logger middleware </br>
const  logger = (req, res, next) => { </br>
    console.log(`${req.method} ${req.url} ${req.protocol}://${req.get('host')}${req.originalUrl}`); </br>
    next(); </br>
} </br>
export default logger </br>



➡️ **ERROR HANDLING, COLOR ADDING (In Express.js) -  LESSON 5** </br>
✔️ Error Handling:  Now, Express.js , comes with a default “error handling”;  </br>
Error handling in Express.js is managed through error-handling middleware
functions, which are identified by having four arguments: (err, req, res, next).
These provide a centralized way to catch and process errors that occur within your
application, both synchronously and asynchronously.  </br>
e.g if you make a request to something that does not exit in your created API.  It will give us a 404 error handler (default error handler), but actually gives us an html page, (Obviously that’s not what you want whewn you create an Application & the API handles error this way, it wont be perfect). </br>

I will show you, how to create “custom error handler”, that will give us a “JSON response” along with the “statuscode” e.g 404. </br>
On error.js  file On MiddleWare Folder,  FOR “ERROR MIDDLEWARE” IMPLEMENTATION (example) </br>

const errorHandler = (err, req, res, next) => { </br>
    // res.status(404); </br>
    // res.json({msg: err.message}); </br>
    
    if(err.status){ </br>
        // res.status(404); </br>
        // res.json({msg: err.message}); </br>
        res.status(404).json({msg: err.message}); </br>
    } </br>
    else { </br>
        res.status(500); </br>
        res.json({msg: err.message}); </br>
    } </br>
}; </br>
export default errorHandler; </br>

<img width="673" height="416" alt="error-handling-img25" src="https://github.com/user-attachments/assets/6a127e88-ef29-4d3e-8960-6ea20bedbccc" /> </br>
Above, We Define a special middleware function with four arguments: (err, req, res, next). This middleware(error.js) should be placed after all other app.use() and route definitions, (on the server.js file & also make sure to import it).  </br>

On server.js  file On MiddleWare Folder,  FOR “ERROR MIDDLEWARE” IMPLEMENTATION (example) </br>
import errorHandler from './middleware/error.js'; </br>
//ERROR HANDLER (error middleware) </br>
app.use(errorHandler); </br>
<img width="633" height="324" alt="error-handling-img26" src="https://github.com/user-attachments/assets/fe803666-5131-4747-9083-bda9ff17f764" /> </br>
<img width="197" height="105" alt="image" src="https://github.com/user-attachments/assets/96ff932a-f281-4351-90c2-fedddd96e2aa" /> </br>

On postsRoutes.js  in Routes folder file On MiddleWare Folder,  FOR “ERROR MIDDLEWARE” IMPLEMENTATION (example for Getting or Reading single file) </br>

// "GET" REQUEST   FOR GETTING - SINGLE POST BY(id) </br>
router.get('/:id', (req, res, next) => { </br>
    // ACCESSING THE "id" FROM req.params </br>
    const id = parseInt(req.params.id); </br>
     
    // find() ARRAY METHOD , WILL WORK HERE SINCE WE JUST GETTING ONE 1 VALUE </br>
    // const post = posts.filter((pos) => pos.id === id); </br>
    const postt = posts.find((pos) => pos.id === id); </br>
    if(!postt) </br>
    { </br>
        /** </br>
         * INSTEAD OF PUTTING THIS statuscode(404), LET IT HAPPEN IN THE "ERROR HANDLER"
         * #ALSO ADD "next" IN THE () PARANTHESIS, FOR THE POST REQUEST 
        */ </br>
        // res.status(404); </br>
        // res.json({message: `A post with the id of ${id} was not found`}); </br>
       const error = new Error(`A post with the ID: ${id} ,was not found`); </br>
       error.status = 404; </br>
        //return next(error); </br>
         next(error); </br>
    } 
    else { </br>
        res.status(200); </br>
        res.json(postt); </br>
    } </br>
    // res.status(200); </br>
    // res.json(post); </br>
}); </br>
<img width="766" height="362" alt="error-handling-img28" src="https://github.com/user-attachments/assets/9bf09c22-a536-4501-b6bd-3eee36212244" /> </br>

✔️ Using Colors.js :  Using Colors.js (with ES Module Compatibility) ; </br>
 import ‘colors’; is crucial as colors.js extends the string.prototype, allowing you to call color methods directly on the strings. You can chain color and style methods directly onto your strings literals. </br>
 
Key consideration when using colors.js with ES module compatibility, include: </br>
1.) Ensure your package.json includes "type": "module" to enable ES Module syntax. </br>
2.) Install Colors.js with ( npm install colors) </br>
3.) Use import statements instead of require(). </br>
(diagram below, shows colors:  is available after installation) </br>
<img width="438" height="235" alt="using-color-img29" src="https://github.com/user-attachments/assets/a5ec4321-adeb-4554-a152-6a259ce8b5f3" /> </br>

On logger.js  file On MiddleWare Folder,  FOR “LOGGER MIDDLEWARE” IMPLEMENTATION (example) </br>
<img width="586" height="357" alt="using-color-img30" src="https://github.com/user-attachments/assets/049f7e24-5293-4ff8-ab08-ef52cea6b18f" /> </br>
// LOGGER MIDDLEWARE  FOR "Colors.js" </br>
import colors from 'colors'; </br>

// // 1st FUNCTION -- 1st middleware here </br>
// function myLogger(req, res, next){ </br>
//     console.log(`${req.method} ${req.url}`);
//     next();
// } </br>

//2nd FUNCTION - for logger middleware </br>
const  logger = (req, res, next) => { </br>
console.log(`${req.method} ${req.url} ${req.protocol}://${req.get('host')} ${req.originalUrl}` 
      ['blue']
    ); </br>
    next(); </br>
} </br>




➡️ **FETCHING DATA FROM THE FRONTEND  (In Express.js) -  LESSON 6** </br>
✔️ Interating With Our Backend From Our FrontEnd :-  Will be given an Example on how we can interact with our “Backend” from our “FrontEnd”. </br>
<img width="106" height="120" alt="interacting-with-backend-from-frontend-img31" src="https://github.com/user-attachments/assets/a067200e-174c-495d-a1fa-43e5cc381118" /> </br>
<img width="97" height="122" alt="interacting-with-backend-from-frontend-img32" src="https://github.com/user-attachments/assets/2df1f290-279e-43d6-bf79-8290fac5cd6f" /> </br>
<img width="106" height="122" alt="interacting-with-backend-from-frontend-img33" src="https://github.com/user-attachments/assets/cf269ba6-608e-4caf-82ce-5de53638876a" /> </br>
<img width="103" height="122" alt="interacting-with-backend-from-frontend-img34" src="https://github.com/user-attachments/assets/4e834de1-8e47-4de7-9c35-444cff12cb00" /> </br>

On server.js  file On MiddleWare Folder,  FOR “Fetching & Interacting With Our Backend From The FrontEnd ” IMPLEMENTATION (example) </br>
//USING "import" WITH "ES module" for Path </br>
import path from 'path'; </br>
import { fileURLToPath } from 'url'; </br>

// GETTING THE DIRECTORY NAME </br>
const __filename = fileURLToPath(import.meta.url); </br>
// console.log(__filename); </br>
const __dirname = path.dirname(__filename); </br>


On main.js  file On Public Folder,  FOR “Fetching & Interacting With Our Backend From The FrontEnd ” IMPLEMENTATION (example)
const output = document.querySelector('#output'); </br>

const button = document.querySelector('#get-posts-btn'); </br>
//GET & SHOW  POST (posts) </br>
async function showPosts() { </br>
    try { </br>
        const res = await fetch('http//localhost:8000/api/posts'); </br>
		
        if(!res.ok){ </br>
            throw new Error("Failed to fetch the posts"); </br>
        } </br>

        const postss = await res.json(); </br>
        output.innerHTML = ''; </br>

        postss.forEach((post) => { </br>
            const postEl = document.createElement('div'); </br>
            postEl.textContent = post.title; </br>
            output.appendChild(postEl); </br>
        }) </br>
    } </br>
    catch (error) { </br>
      console.log('Error Fetching The Posts: ', error);  </br>
    } </br>
} </br>

button.addEventListener('click', showPosts); </br>




➡️ **TEMPLATE ENGINES (In Express.js) -  LESSON 7** </br>
✔️ Template Engines:  </br>
Ejs or Embedded javascript , is a popular template engine used in Node.js & Express.js , to generate dynamic HTML content.  It allows developers to embed plain Javascript code directly within HTML files , creating server -rendered web application. </br>
Make sure to install “template engines” like .ejs  , you can use anyone you want whenworking on express.js </br>






































































