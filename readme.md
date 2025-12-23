**MASTERING EXPRESSJS CRASh COURSE**

**Requirement / Prerequisites** </br>
1.JavaScript fundamentals (functions, loops, objects, classes etc) </br>
2. Asynchronous programming - Promise, callbacks, async/await.  </br>
3. HTTP Basics  (Methods, status codes, etc)  </br>
4. How JSON APIs work.  </br>
5.Basic understanding of  Node.js </br>
6.NPM (Node Package Manager) </br>



➡️ **EXPRESS.JS** </br>
✔️ What is Express.js ?  Express.js , is a Node.js framework, which has the following attributes / characteristic : It, </br>
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




































