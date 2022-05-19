import { DeleteResult, EntityRepository, getManager, Repository } from 'typeorm';
import { Customer } from '../../../../Entity/Customer';
import { ServiceBroker } from 'moleculer';

const logger = new ServiceBroker().logger;

@EntityRepository(Customer)
export default class CustomerRepository extends Repository<Customer> {
  async createCustomer(): Promise<any> {
    // todo
  }

  async deleteCustomer(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }

  async getCustomer(id: number): Promise<Customer> {
    return await this.findOne(id, { relations: ['childs'] });
  }

  async getCustomers(type: string): Promise<Customer[]> {
    let options = {};
    switch (type) {
      case 'companies':
        options = { where: { customerHighLvl1: null }, relations: ['childs'] };
        break;
    }
    return this.find(options);
  }

  async getChildsForCustomerId(id: number) {
    const values = this.createQueryBuilder('cust1')
      .leftJoinAndSelect('customers', 'cust2', 'cust1.id = cust2.active')
      .where('cust1.id = :id', { id })
      .getMany();
  }

  async updateCustomer(): Promise<any> {
    // todo
  }
}
