import { promisify } from 'util';
import { Service, ServiceBroker } from 'moleculer';
import jwt from 'jsonwebtoken';
import 'reflect-metadata';
import ResolveToken from './Application/Action/ResolveToken';
import VerifyToken from './Application/Action/VerifyToken';
import Auth from './Application/Action/Auth';
import GenerateToken from './Application/Method/GenerateToken';

export default class AuthService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'auth',
      settings: {},
      events: {},
      actions: {
        auth: Auth,
        verifyToken: VerifyToken,
        resolveToken: ResolveToken,
      },
      methods: {
        GenerateToken,
      },
      created() {
        this.encode = promisify(jwt.sign);
        this.verify = promisify(jwt.verify);
      },
    });
  }
}
