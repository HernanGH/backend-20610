const Koa = require('koa');
const koaBody = require('koa-body');

const routerBook = require('./books');

const app = new Koa();

app.use(koaBody());

app.use(routerBook.routes());

app.use(async (context) => {
    context.body = 'Hello world!'; 
});

app.listen(8080);