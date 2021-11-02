import { RequestHandler } from "express";

const express = require('express');
const router = express.Router();

// 路由配置
// 如果访问 /users 会展示 放入这句话！
router.get('/', function(req, res, next) {
  res.send('放入这句话！');
} as RequestHandler);

// 如果访问 /users/xxx 会展示 放入xxx！
router.get('/xxx', function(req, res, next) {
  res.send('放入xxx！');
} as RequestHandler);

module.exports = router;
