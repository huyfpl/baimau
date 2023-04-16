var express = require('express');
var router = express.Router();
const USER_API = require('../controller/user.api');
router.get('/users',USER_API.listuser); 
module.exports = router;