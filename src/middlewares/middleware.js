exports.middleware = ( req, res, next ) => {
    console.log();
    console.log("Passei no middleware global");
    console.log();
    next();
}