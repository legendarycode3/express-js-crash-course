// LOGGER MIDDLEWARE  FOR "Colors.js"
import colors from 'colors';



// // 1st FUNCTION -- 1st middleware here
// function myLogger(req, res, next){
//     console.log(`${req.method} ${req.url}`);
//     next();
// }


//2nd FUNCTION - for logger middleware
const  logger = (req, res, next) => {
    const methodColors = {
        POST: 'blue',
        GET: 'green',
        PUT: 'yellow',
        DELETE: 'red'
    }
    // const methodColor = [
    //     { POST: 'blue' },
    //     { GET: 'green' },
    //     { PUT: 'yellow'},
    //     {DELETE: 'red' },
    // ];

    const color = methodColors[req.method] || white;

    console.log(`${req.method} ${req.url} ${req.protocol}://${req.get('host')} ${req.originalUrl}` 
    //   ['blue']
        [color]
    );

    next();
}





export default logger