import Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    const time = ctx.response.get('X-Response-Time');
    console.log(`${ctx.url} - ${time}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const time = Date.now() - start;
    ctx.set('X-Response-Time', `${time}ms`);
});

app.use(async (ctx) => {
    ctx.body = 'Hello World';
    // await next()
});

app.listen(3000)