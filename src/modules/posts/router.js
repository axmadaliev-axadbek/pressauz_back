const router = require('express').Router()
const controller = require('./controllers.js')

router.get('/posts', controller.GETALL)
router.get('/posts/:id', controller.GETALL)

router.get('/pendingPosts', controller.GETPENDIGS)
router.get('/pendingPosts/:id', controller.GETPENDIGS)

router.get('/canceledPosts', controller.GETCANCELED)
router.get('/canceledPosts/:id', controller.GETCANCELED)

router.post('/posts',controller.postsImg, controller.ADDPOST)

router.put('/posts/:id', controller.CONFIRMPOST)
router.put('/cancel/:id', controller.CANCELPOST)


module.exports = router