import { Context } from 'moleculer';
import jwt from 'jsonwebtoken';
import { User } from '../../../../Entity/User';

const JWT_SECRET = 'xlkfgnl$%&dklfjgh';

const ResolveToken: unknown = {
  // cache: {
  //   keys: ["token"],
  //   ttl: 60 * 60, // 1 sat
  // },
  rest: {
    method: 'POST',
    path: '/token/resolve',
  },
  params: {
    token: 'string',
  },
  handler(ctx: Context<{ token: string }>): User {
    return new this.Promise((resolve: any, reject: any) => {
      jwt.verify(ctx.params.token, JWT_SECRET, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        resolve(decoded);
      });
    }).then(async (decoded: any) => {
      if (decoded.id) {
        return await ctx.call('users.getById', { id: decoded.id });
      }
    });
  },
};

export default ResolveToken;
