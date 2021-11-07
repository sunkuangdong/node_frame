import Koa = require("koa");
const app = new Koa();

// 1. 没加next是不会进入第二个中间件的
// app.use(async (ctx) => {
//     ctx.body = 'hello'
// })

// app.use(async (ctx) => {
//     ctx.body = 'world'
// })

// 2. 加入了next之后才会进入第二个中间件
app.use(async (ctx, next) => {
    // 先进行 hello
    ctx.body = 'hello'
    // 进入下一个中间件
    await next()
    // 最后会被执行 拼接我的名字
    ctx.body += ' 孙匡东'
})

app.use(async (ctx, next) => {
    // 拼接hello
    ctx.body += ' world'
    // 进入下一个中间件
    await next()
})

app.use(async (ctx, next) => {
    // 执行设置请求头的Content-Typ
    ctx.set('Content-Type', 'text/html; charset=utf-8')
    // 进入下一个中间件
    await next()
})

app.listen(3000);