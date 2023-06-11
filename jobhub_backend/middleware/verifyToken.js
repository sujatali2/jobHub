const User = require("../models/User");
const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
        const authHeader = req.headers.token;

        if(authHeader){
            const token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.JWT_SECRET, async (err, user)=>{
                if(err) res.status(403).json('Invalid token')
                req.user = user;
                next();
            })
        }else{
            res.status(404).json("You are not authorized")
        }
}

verifyAndAuthorization = (req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.id == req.params.id){
            next();
        }else{
            res.status(403).json('You are restricted to performance this task')
        }
    })
}

verifyAdmin = (req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json('You are restricted to performance this task')
        }
    })
}

module.exports = {verifyToken, verifyAndAuthorization, verifyAdmin};
