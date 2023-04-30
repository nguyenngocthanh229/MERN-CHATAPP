const ctrls = require('../controllers/userController');
const router = require('express').Router();

router.post('/register', ctrls.register)


module.exports = router