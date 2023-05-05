const ctrls = require('../controllers/userController');
const router = require('express').Router();

router.post('/register', ctrls.register)
router.post('/login', ctrls.login)
router.post('/setAvatar/:id', ctrls.setAvatar)
router.get('/allusers/:id', ctrls.getAllUsers)
router.get('/logout/:id', ctrls.logOut)



module.exports = router