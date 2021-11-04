const express = require('express');

const app = express();
// 大小写敏感 - 必须放在第一个
app.set("case sensitive routing", true);
// 默认目录
app.set("views", 'frank')
// 默认的实图引擎 pug/ejs
app.set('view engine', 'ejs');

// 如果你请求的是一个json, 他就会把json解析出来, 放在body里
// express.json() 会返回一个函数
app.use(express.json());

// 静态服务器，如果你请求的路径在yyy目录里，自动寻找
// app.use(express.static('yyy'))

// app.get('/style.css', (req, res, next) => {
//     res.send('style.css')
// })

app.get('/test', (req, res, next) => {
    res.render('test', {
        pageTitle: '方方'
    })
})

app.post('/test', (req, res, next) => {
    res.send("post test")
})

app.put('/test', (req, res, next) => {
    res.send("put test")
})

app.delete('/test', (req, res, next) => {
    res.send("delete test")
})

app.patch('/test', (req, res, next) => {
    res.send("patch test")
})

app.use((request, response, next) => {
    console.log(request.path, request.body);
    response.send('hi');
    next();
})

app.listen(3000, () => {
    console.log("成功: http://localhost:3000");
})