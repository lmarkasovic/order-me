import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../../Infrastructure/Repository/CustomerRepository';
import CustomerDTO from '../DTO/CustomerDTO';
import CustomerMap from '../Mapper/CustomerMap';

const GetCustomer: unknown = {
  rest: {
    method: 'GET',
    path: '/:id',
  },
  async handler(ctx: any): Promise<CustomerDTO> {
    const repo = getCustomRepository(CustomerRepository);
    const customer = CustomerMap.toDTO(await repo.getCustomer(+ctx.params.id));
    return customer;
  },
};

export default GetCustomer;
