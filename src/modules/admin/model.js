const { LOGIN, REGISTER, CHANGEPROFILE, GETALL} = require('./query.js')
const { fetch, fetchAll } = require('../../lib/postgres.js')

const ALLUSERS = async () => {
    try {
        return await fetchAll(GETALL)
    } catch (error) {
        console.log(error)
    }
}
const LOGINPROFILE = async ({username, password}) => {
    try {
        return await fetch(LOGIN, username, password)
    } catch (error) {
        console.log(error)
    }
}

const REGISTERACCOUNT = async ( {username, password}) => {
    try {
        return await fetch(REGISTER, username, password)
    } catch (error) {
        console.log(error)
    }
}


const PUTPROFILE = async ( {username, visibility}, user_id) => {
    try {
        return await fetch(CHANGEPROFILE, username, password,user_id)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    LOGINPROFILE, REGISTERACCOUNT,PUTPROFILE, ALLUSERS
}