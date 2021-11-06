const express = require('express')
const app = express()

// 获取请求的name，也就是id部分
app.get("/users/:id", (request, response, next) => {
    console.log(request.params);
    next()
})

// 获取请求参数
app.get('/query/:id', (request, response, next) => {
    console.log(request.query);
    next()
})

// 控制是否是ajax请求 ， 默认是false
// 请求头中加入 X-Requested-With: XMLHttpRequest
// 为了区分是否是ajax请求
app.get("/xhr/:id",(request, response, next)=>{
    console.log(request.xhr);
    next()
})

app.listen(3001, () => {
    console.log("成功: http://localhost:3001")
})