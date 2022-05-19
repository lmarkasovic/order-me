import { Service, ServiceBroker } from 'moleculer';
import 'reflect-metadata';
import GetCustomers from './Application/Action/GetCustomers';
import GetCustomer from './Application/Action/GetCustomer';
import { getConnection } from 'typeorm';
import connectionInstance from '../../Entity/Connection';
import GetCustomerOffer from './Application/Action/GetCustomerOffer';

export default class KitchenService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'customers',
      actions: {
        getCustomer: GetCustomer,
        getCustomers: GetCustomers,
        getCustomerOffer: GetCustomerOffer,
      },
      started: async function (): Promise<void> {
        await connectionInstance();
      },
      stopped: async function () {
        return await getConnection().close();
      },
    });
  }
}
