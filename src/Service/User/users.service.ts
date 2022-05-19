import { promisify } from 'util';
import { Service, ServiceBroker } from 'moleculer';
import jwt from 'jsonwebtoken';
import 'reflect-metadata';

export default class UserService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'users',
      settings: {},
      events: {},
      actions: {},
      methods: {},
      created() {
        this.encode = promisify(jwt.sign);
        this.verify = promisify(jwt.verify);
      },
    });
  }
}
