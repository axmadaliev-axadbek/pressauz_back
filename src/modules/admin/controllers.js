const model  = require('./model.js')
const {profileUpload} = require('../../utils/multer.js');
const profileImage = profileUpload.single('avatar')
const jwt = require('../../utils/jwt.js')
const GETALL = async (req,res) => {
    try {
        let users = await model.ALLUSERS(req.params)
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


const LOGIN = async (req,res) => {
    try {
        let user = await model.LOGINPROFILE(req.body)
        if(user) {
            res.status(200).json({
                status:200,
                message: 'ok',
                data: user,
                token: jwt.sign(admin.admin_id)
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const REGISTER = async (req,res) => {
    try {
        // console.log('req.body')
        console.log(req.body)
        let user = await model.REGISTERACCOUNT(req.body)
        if(user) {
            res.status(200).json({
                status:200,
                message: 'ok',
                data: user,
                token: user.users_id
            })
        }
    } catch (error) {
        console.log(error);
    }
}

// const REGISTER = async (req,res) => {
//     console.log(req.body);
//     // try {
//     //     let {userId} = jwt.verify(req.headers.token)
//     //     let user = await model.REGISTERACCOUNT(req.body, userId)
//     //     console.log(user);
//     //     if(user) {
//     //         res.status(200).json({
//     //             status:200,
//     //             message: 'ok',
//     //             data: user
//     //         })
//     //     }
//     // } catch (error) {
//     //     console.log(error);
//     // }
// }

const CHANGEPROFILE = async (req,res) => {
    try {
        let {userId} = jwt.verify(req.headers.token)
        let user = await model.REGISTERACCOUNT(req.body, userId)
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
    GETALL, profileImage, LOGIN, REGISTER, CHANGEPROFILE
}