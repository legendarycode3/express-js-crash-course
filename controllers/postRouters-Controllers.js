let posts = [
    { id: 1, title: 'First Post'},
    { id: 2, title: 'Second Post'},
    { id: 3, title: 'Third Post'},
    { id: 4, title: 'Fouth Post'},
    { id: 5, title: 'Fifth Post'},
    { id: 6, title: 'Six Post'},
];





/**
 * FOR GETTING "ALL POST" - "GET" REQUEST CONTROLLER , FUNCTION
 */
// @desc  GET ALL POST
// @route "GET" /api/posts
export const getPosts = (req, res, next) => {
    // GETTING THE "Query String"
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0 ){
        // res.status(200); 
        // res.json(posts.slice(0, limit));
        return res.status(200).json(posts.slice(0, limit))
    }
    else {
        // res.status(200);
        // res.json(posts);
        res.status(200).json(posts);
    }
    // res.json(posts);
}






/**
 * FOR GETTING "SINGLE POST" - "GET" REQUEST CONTROLLER , FUNCTION
 */
// @desc  GET SINGLE POST
// @route "GET" /api/posts/:id
export const getPost = (req, res, next) => {
    // ACCESSING THE "id" FROM req.params
    const id = parseInt(req.params.id);
     
    // find() ARRAY METHOD , WILL WORK HERE SINCE WE JUST GETTING ONE 1 VALUE
    // const post = posts.filter((pos) => pos.id === id);
    const postt = posts.find((pos) => pos.id === id);
    if(!postt)
    {
        /**
         * INSTEAD OF PUTTING THIS statuscode(404), LET IT HAPPEN IN THE "ERROR HANDLER"
         * #ALSO ADD "next" IN THE () PARANTHESIS, FOR THE POST REQUEST
        */
        // res.status(404);
        // res.json({message: `A post with the id of ${id} was not found`});
       const error = new Error(`A post with the ID: ${id} ,was not found`);
       error.status = 404;
        //return next(error);
         next(error);
    } 
    else {
        res.status(200);
        res.json(postt);
    }

    // res.status(200);

    // res.json(post);
}






// @desc   CREATE NEW POST
// @route "POST"  /api/posts
export const createPost =  (req, res, next) => {
    //console.log(req.body);
    
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };
    //newPost = JSON.parse(body);

    // (!newPost)IF THE "newPost" THOSE NOT HAVE A TITLE
    if (!newPost.title){
        // res.status(400);
        // res.json({message: 'Please , include a title'});

        // const error = new Error(`A post with the ID: ${id} ,was not found`);
        const error = new Error(`please include a title`);
        error.status = 400;
        return next(error);
        // next(error);

        //return res.status(400).json({message: 'Please , include a title'});
    }
    else{
        
        posts.push(newPost)
        res.status(201);
        res.json(posts);
        //res.status(201).json(posts);
    }

    // res.status(201).json(posts);
}





// @desc   UPDATE NEW POST
// @route "PUT"  /api/posts
export const updatePost = (req, res, next) => {
    // ACCESSING THE "id" FROM req.params
    const id = parseInt(req.params.id);

    // find() ARRAY METHOD , FINDIN & UPDATING ONE VALUE WILL WORK HERE SINCE WE JUST GETTING ONE 1 VALUE
    const postt = posts.find((pos) => pos.id === id);

    if(!postt){
        // res.status(404);
        // res.json({message: `A post with the id of ${id} was not found`});

        //return res.status(404).json({message: `A post with the id of ${id} was not found`});

        // FOR "ERROR HANDLING" ON - "PUT REQUEST" (UPDATING)
        const error = new Error(`please this ID: ${id} is not available, in otherwords, we can't UPDATE`);
        error.status = 400;
        return next(error);
        // next(error);
    }
    else{
        //postt = req.body;
        postt.title = req.body.title;
        res.status(200);
        res.json(posts);
        //res.status(200).json(posts);
    }
}





// @desc   DELETING NEW POST
// @route "DELET"  /api/posts
export const deletePost = (req, res, next) => {
    // CONVERTING TO NUMBER, THE (id) IF IT APPEARS AS LETTER
    // ACCESSING THE "id" FROM req.params
    const id = parseInt(req.params.id);

    // find() ARRAY METHOD , FINDIN & UPDATING ONE VALUE WILL WORK HERE SINCE WE JUST GETTING ONE 1 VALUE
    const postt = posts.find((pos) => pos.id === id);

    // if(!postt){
    //     res.status(404);
    //     res.json({message: `A post with the ID: ${id}, was not found, when trying to DELETE`});
    // }else {

    //     posts.splice(postt, 1);
    //     //posts = posts.filter((pos) => pos !== id);
    //     res.status(200);
    //     res.json(`Deleted Sucessfully ID: ${id}`);
    // }

    // OR
    if(!postt){
        // res.status(404);
        // res.json({message: `A post with the ID: ${id}, was not found, when trying to DELETE`});

        // return res.status(200).json({message: `A post with the ID: ${id}, was not found, when trying to DELETE`});

         // FOR "ERROR HANDLING" ON - "DELETE REQUEST" (DELETING)
        const error = new Error(`please this ID: ${id}, is not found, can't be be DELETED`);
        error.status = 400;
        return next(error);
        // next(error);
    }else {

        //posts.splice(postt, 1);
        posts = posts.filter((pos) => pos.id !== id);
        res.status(200);
        //res.json(`Deleted Sucessfully ID: ${id}`);
        res.json(posts);
    }
}