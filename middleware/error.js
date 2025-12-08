// MIDDLEWARE ERROR  - EXTERNAL FUNCTION
const errorHandler = (err, req, res, next) => {
    // res.status(404);
    // res.json({msg: err.message});

    if(err.status){
        // res.status(404);
        // res.json({msg: err.message});

        
        res.status(err.status).json({msg: err.message});
         //res.status(404).json({msg: err.message});
    }
    else {
        // res.status(500);
        // res.json({msg: err.message});

        res.status(500).json({msg: err.message});
    }
};



export default errorHandler;