import { getCustomRepository, InsertResult, UpdateResult } from 'typeorm';
import OrderDetailsRepository from '../../Infrastructure/Repository/OrderDetailsRepository';

const CancelOrder: unknown = {
  rest: {
    method: 'PATCH',
    path: 'cancelOrder',
  },
  params: {
    orderId: 'number',
    dishId: 'number'
  },
  async handler(ctx: any): Promise<UpdateResult> {
    const repo = getCustomRepository(OrderDetailsRepository);
    return await repo.cancelOrder(+ctx.params.orderId, +ctx.params.dishId);
  },
};

export default CancelOrder;
