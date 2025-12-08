//A CATCH ALL MIDDLEWARE HERE (MEANING, TI GOING TO CATCH OTHER ERROR THAT ARE FOUND OUTSIDE THE ONCES DONE WITH THE ("POST", "GET", "PUT", "DELETE" REQUESTS, ON THE ROUTE) 
const notFound = (req, res, next) => {
    const error = new  Error('Not Found');
    error.status = 404;
    next(error);
};





// IMPORT ON server.js FILE
export default notFound;