import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import router from './routes';

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running at port %s', 3000);
});
