import { Service, ServiceBroker, Context } from 'moleculer';
import 'reflect-metadata';

export default class OfferService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'offers',
      actions: {
        // Dohvat svih
        list: {
          rest: {
            method: 'GET',
            path: '/',
          },
          async handler(ctx: Context<unknown>): Promise<string> {
            this.logger.debug(ctx);
            return 'Hello Offers!';
          },
        },
      },
    });
  }
}
