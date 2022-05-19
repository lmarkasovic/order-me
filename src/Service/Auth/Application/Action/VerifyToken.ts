import { Context } from 'moleculer';

const JWT_SECRET = 'xlkfgnl$%&dklfjgh';

const VerifyToken: unknown = {
  rest: {
    method: 'POST',
    path: '/token/verify',
  },
  params: {
    token: 'string',
  },
  handler(ctx: Context<{ token: string }>) {
    return this.verify(ctx.params.token, JWT_SECRET);
  },
};

export default VerifyToken;
