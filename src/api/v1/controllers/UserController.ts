import * as Router from 'koa-router';

const users = [
  { nickname: 'Amast1' },
  { nickname: 'Amast2' },
  { nickname: 'Amast3' },
];

function getAllUsers(ctx: Router.IRouterContext) {
  ctx.body = users;
}

export default {
  getAllUsers,
};
