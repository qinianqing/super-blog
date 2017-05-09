const express = require('express');
const router = express.Router();
//引入首页的路由文件
const home = require('./routes/home')
//首页
router.get('/',home.index);
module.exports = router;
