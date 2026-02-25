// Throw an error when searched item is not found
function notFoundError(option){
    const err=new Error(`${option} not found`);
    err.statusCode=404;
    throw err;
}

module.exports=notFoundError;