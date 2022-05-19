import { IncomingMessage } from 'http';
import { Service, ServiceBroker, Context } from 'moleculer';
import ApiGateway from 'moleculer-web';

export default class ApiService extends Service {
  public constructor(broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'api',
      mixins: [ApiGateway],
      settings: {
        path: '/api',
        port: process.env.PORT || 3000,
        cors: {
          origin: '*',
          methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE', 'PATCH'],
          allowedHeaders: '*',
          exposedHeaders: [],
          credentials: false,
          maxAge: 3600,
        },
        routes: [
          // User routes
          {
            path: '/auth',
            whitelist: ['auth.*'],
            authentication: false,
            autoAliases: true,
          },
          {
            path: '/',
            whitelist: ['orders.*'],
            authentication: true,
            autoAliases: true,
            bodyParsers: {
              json: {
                strict: false,
                limit: '2MB',
              },
              urlencoded: {
                extended: true,
                limit: '2MB',
              },
            },
          },
          // Admin routes
          {
            path: '/admin',
            whitelist: ['dishes.*', 'customers.*', 'users.*'],
            authentication: true,
            autoAliases: true,
            bodyParsers: {
              json: {
                strict: false,
                limit: '2MB',
              },
              urlencoded: {
                extended: true,
                limit: '2MB',
              },
            },
          },
        ],
        log4XXResponses: false,
        logRequestParams: null,
        logResponseData: null,
        assets: {
          folder: 'public',
          options: {},
        },
      },

      methods: {
        async authenticate(ctx: Context, route: any, req: IncomingMessage): Promise<any> {
          const auth = req.headers.authorization;

          if (auth && auth.startsWith('Bearer')) {
            const token = auth.slice(7);
            const res: any = await ctx.call('auth.verifyToken', { token });
            if (res.id) {
              return res;
            }
            throw new ApiGateway.Errors.UnAuthorizedError(ApiGateway.Errors.ERR_INVALID_TOKEN, {
              error: 'Invalid Token',
            });
          } else {
            throw new ApiGateway.Errors.UnAuthorizedError(ApiGateway.Errors.ERR_NO_TOKEN, {
              error: 'No Token',
            });
          }
        },
        async authorize(): Promise<void> {
          // TODO
        },
      },
    });
  }
}
