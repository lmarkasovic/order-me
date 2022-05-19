import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../../Infrastructure/Repository/CustomerRepository';
import CustomerDTO from '../DTO/CustomerDTO';
import CustomerMap from '../Mapper/CustomerMap';

const GetCustomers: unknown = {
  rest: {
    method: 'GET',
    path: '/',
  },
  params: {
    type: {
      type: 'string',
      optional: true,
    },
  },
  async handler(ctx: any): Promise<CustomerDTO[]> {
    const repo = getCustomRepository(CustomerRepository);
    const customers = CustomerMap.toDTOs(await repo.getCustomers(ctx.params.type));
    return customers;
  },
};

export default GetCustomers;
