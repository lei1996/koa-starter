import koa from 'koa'

const app = new koa()

app.use(async _ctx => {
    _ctx.body = 'Hello World'
})

app.listen(4000, () => {
    console.log('listen on 4000');
})
