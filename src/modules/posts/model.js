const { GETALL, ADDPOST, CANCELPOST, CONFIRMPOST, getPendingPosts, getCanceledPosts} = require('./query.js')
const { fetch, fetchAll } = require('../../lib/postgres.js')

const confimedPosts = async ({id = 0}) => {
    try {
        return await fetchAll(GETALL, id)
    } catch (error) {
        console.log(error)
    }
}

const pendingPosts = async ({id = 0}) => {
    try {
        return await fetchAll(getPendingPosts, id)
    } catch (error) {
        console.log(error)
    }
}

const canceledPosts = async ({id = 0}) => {
    try {
        return await fetchAll(getCanceledPosts, id)
    } catch (error) {
        console.log(error)
    }
}
const POST = async ({speaker, shaxs, job, phone, phone2, categories, subCategory, type, place, postTitle, postDesc,  date_at, time}, { filename}) => {
    console.log(filename);
    try {
       let res = await fetch(ADDPOST, speaker, shaxs, job, phone, phone2, categories, subCategory, type, place, postTitle, postDesc,  date_at, time, filename);
       return res
    } catch (error) {
        
    }
}

const cancelPOST = async ( {id}) => {
    try {
        console.log(id);
        return await fetch(CANCELPOST, id);
    } catch (error) {
        console.log(error);
    }
}

const confirmPOST = async ( {id}) => {
    try {
        console.log(id);
        return await fetch(CONFIRMPOST, id);
    } catch (error) {
        console.log(error);
    }
}




// SELECT floor(random()*(999-100+1))+100;

module.exports = {
    confimedPosts, POST, confirmPOST,  cancelPOST, canceledPosts, pendingPosts
}