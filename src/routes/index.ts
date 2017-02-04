import * as Router from 'koa-router';
import routerV1 from './api-router-v1';

const router = new Router();

router.use('/v1', routerV1.routes(), routerV1.allowedMethods());

export default router;
