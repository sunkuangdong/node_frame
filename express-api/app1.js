const express = require('express')
const app = express()

const users = require('./routers/user')

// 将路由部分独立出来的方法
// 当请求到/users的时候会自动查找模块：users ，然后进行匹配
app.use('/users', users)

app.listen(3000, () => {
    console.log("成功: http://localhost:3000");
})