import { EntityRepository, LessThan, MoreThan, Repository } from 'typeorm';
import { OrderDetails } from '../../../../Entity/OrderDetails';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
const util = require('util');


@EntityRepository(OrderDetails)
export default class OrderDetailsRepository extends Repository<OrderDetails> {

  async cancelOrder(_orderId: number, _dishId: number): Promise<UpdateResult> {
    return await this
    .createQueryBuilder()
    .update(OrderDetails)
    .set({ status: "canceled", canceledDate: new Date(Date.now()) })
    .where({
      orderId: _orderId,
      dishId: _dishId,
    })
    .execute();
  }
}