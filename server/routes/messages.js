const ctrls = require('../controllers/messageController');
const router = require("express").Router();

router.post("/addmsg/", ctrls.addMessage);
router.post("/getmsg/", ctrls.getMessages);

module.exports = router;