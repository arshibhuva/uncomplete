var jwt = require('jsonwebtoken');

const checktoken = (req,res,next) =>{
    jwt.verify(req.headers.authorization,'cdmi',next)
}
module.exports ={
    checktoken
}