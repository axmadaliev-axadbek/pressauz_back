const Jwt = require('jsonwebtoken');
const {SECRET} = require('../config.js')

module.exports = {
    sign: (payload) => jwt.sign(payload, SECRET),
    verify: (payload) => jwt.verify(payload, SECRET)
}