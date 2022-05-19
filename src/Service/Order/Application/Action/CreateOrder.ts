import { getCustomRepository } from 'typeorm';
import { Order } from '../../../../Entity/Order';
import OrderRepository from '../../Infrastructure/Repository/OrderRepository';
import OrderDTO from '../DTO/OrderDTO';
import OrderMap from '../Mapper/OrderMap';
import {CreateOrderSchema} from '../Schema/CreateOrderSchema';

const CreateOrder: unknown = {
  rest: {
    method: 'POST',
    path: '/',
  },
  params: CreateOrderSchema,
  async handler(ctx: any): Promise<Order> {
    const repo = getCustomRepository(OrderRepository);
    const order = await repo.saveOrder(OrderMap.toEntity(ctx.params));
    //console.log(order);
    return order;    
  },
};

export default CreateOrder;
