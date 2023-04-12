var express = require('express');
var router = express.Router();
const USER_API = require('../controller/user.api');
router.get('/users',USER_API.listuser); // lấy danh sách user
module.exports = router;