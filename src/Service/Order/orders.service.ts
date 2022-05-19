import { Service, ServiceBroker } from 'moleculer';
import 'reflect-metadata';

import CancelOrder from './Application/Action/CancelOrder';
import CreateOrder from './Application/Action/CreateOrder';
import GetOrders from './Application/Action/GetOrders';

export default class OrderService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'orders',
      settings: {},
      events: {},
      actions: {
        // Order actions
        cancelOrder: CancelOrder,
        getOrders: GetOrders,
        createOrder: CreateOrder,
      },
      methods: {},
    });
  }
}
