const model  = require('./model.js')
const {postsUpload} = require('../../utils/multer.js')
const postsImg = postsUpload.single('postImage')


const GETALL = async (req,res) => {
    try {
        let users = await model.confimedPosts(req.params)
        if(users) {
            res.status(200).json({
                status:200,
                message: 'ok',
                data: users
            })
        }
    } catch (error) {
        console.log(error);
    } 
}

const GETPENDIGS = async (req,res) => {
    try {
        let users = await model.pendingPosts(req.params)
        if(users) {
            res.status(200).json({
                status:200,
                message: 'ok',
                data: users
            })
        }
    } catch (error) {
        console.log(error);
    } 
}

const GETCANCELED = async (req,res) => {
    try {
        let users = await model.canceledPosts(req.params)
        if(users) {
            res.status(200).json({
                status:200,
                message: 'ok',
                data: users
            })
        }
    } catch (error) {
        console.log(error);
    } 
}

const ADDPOST = async (req,res) => {
    try {      
        let post = await model.POST(req.body, req.file)
        console.log(post);
        if(post) {
            res.status(201).json({
                status:201,
                message: 'ok',
                data: post
            })
        }
    } catch (error) {
        console.log(error);
    }
}




const CONFIRMPOST = async (req,res) => {
    try {
        let user = await model.confirmPOST(req.params)
        if(user) {
            res.status(200).json({
                status:200,
                message: 'ok',
                data: user
            })
        }
    } catch (error) {
        console.log(error);
    }
}


const CANCELPOST = async (req,res) => {
    try {
        let user = await model.cancelPOST( req.params)
        console.log(user);
        if(user) {
            res.status(200).json({
                status:200,
                message: 'ok',
                data: user
            })
        }
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    GETALL, ADDPOST,  postsImg, GETPENDIGS, CANCELPOST, CONFIRMPOST, GETCANCELED
} 