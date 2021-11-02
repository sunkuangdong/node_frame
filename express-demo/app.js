const {
    error
} = require('console');
const express = require('express');
const logger = require('./logger.js')

const app = express();

app.use(logger('dev'))

app.use((request, response, next) => {
    console.log(1);
    next()
})

app.use((request, response, next) => {
    console.log(2);
    if (true) {
        next("未登录")
        response.end()
    }
})


app.use((request, response, next) => {
    console.log(3);
    next()
})

app.use((error, request, response, next) => {
    next(error)
})

app.use((error, request, response, next) => {
    response.status(500)
    // 最后向页面send一个error
    response.send(error)
})

app.listen(3000, () => {
    console.log('正在 listen 3000');
})