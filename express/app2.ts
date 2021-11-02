import { ErrorRequestHandler, RequestHandler } from "express";

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// set 用来修改配置 将试图容器设置为 views，会自动查找index.ejs
app.set('views', path.join(__dirname, 'views'));
// 如果报错会展示 views 中 error.ejs
app.set('view engine', 'ejs');

// use 用于使用中间件的
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 路由配置
app.use('/', indexRouter);
// 如果是 /users 会请求 usersRouter 容器
app.use('/users', usersRouter);

app.use(function (req, res, next) {
    next(createError(404));
} as RequestHandler);

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
    next()
} as ErrorRequestHandler);

module.exports = app;
