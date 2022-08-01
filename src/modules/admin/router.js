const router = require('express').Router()
const controller = require('./controllers.js')

router.get('/users', controller.GETALL)

router.post('/login', controller.LOGIN)
router.post('/register',  controller.REGISTER)
router.put('/register',  controller.CHANGEPROFILE)


module.exports = router