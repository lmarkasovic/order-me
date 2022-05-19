import { Context } from 'moleculer';
import { getCustomRepository } from 'typeorm';
import OrderRepository from '../../Infrastructure/Repository/OrderRepository';
import _ from 'lodash';
import OrderMap from '../Mapper/OrderMap';
import OrderDTO from '../DTO/OrderDTO';

const GetOrders: unknown = {
  rest: {
    method: 'GET',
    path: '/',
  },
  params: {
    customerId: 'string',
    fromDate: 'string',
    toDate: 'string',
  },
  async handler(ctx: Context<{ customerId: string; fromDate: Date; toDate: Date }>): Promise<OrderDTO[]> {
    const repo = getCustomRepository(OrderRepository);
    let orders = await repo.getOrders(+ctx.params.customerId, ctx.params.fromDate, ctx.params.toDate);
    orders = _.orderBy(orders, ['id']);
    return OrderMap.toDTOs(orders);
  },
};

export default GetOrders;
