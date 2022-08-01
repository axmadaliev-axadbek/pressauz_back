const { request } = require( "express")
const jwt =  require( "../utils/jwt.js")

function admin (req, res, next) {
    try {
        if(req.url != '/admin' && req.method != 'GET') {
            let token = req.headers?.token
            jwt.verify(token)
        }
        next()
    } catch (error) {
        res.sendStatus(401).send(error.message)
    }
}


function checkToken(req, res, next) {
    try {
        if(req.url == '/login' || req.url == '/register') {
            return next()
        }
        let {token} = req.headers
        if(!token) {
            return next( 'Token is required')
        }
        let {userId} = jwt.verify(token)
        request.userId = userId
        return next()
    } catch (error) {
        return next(error.message)
    }   
}

module.exports = {
    admin, checkToken
}