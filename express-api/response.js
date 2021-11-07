const express = require('express')
const app = express()

app.get('/text', (req, res, next) => {
    // 如果请求头中Accept的值是 text/plain，返回hey
    // 如果请求头中Accept的值是 text/html，返回<p>hey</p>
    // 如果请求头中Accept的值是 application/json，返回{ message: 'hey' }
    res.format({
        'text/plain': function () {
            res.send('hey')
        },

        'text/html': function () {
            res.send('<p>hey</p>')
        },

        'application/json': function () {
            res.send({
                message: 'hey'
            })
        },

        default: function () {
            res.status(406).send('Not Acceptable')
        }
    })
})

app.get("/users", (request, response, next) => {
    response.status(200)
    // 重定向
    response.location("/user2")
    next()
})

app.get('/user2', (req, res, next) => {
    console.log('user2');
    res.send("user2")
    next()
})

app.listen(3000, () => {
    console.log("成功: http://localhost:3000");
})