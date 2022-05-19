import { OrderDetails } from '../../../../Entity/OrderDetails';
import OrderDetailsDTO from '../DTO/OrderDetailsDTO';

export default class OrderDetailsMap {
  public static toDTO(order: OrderDetails): OrderDetailsDTO {
    return {
      orderId: order.orderId,
      dishId: order.dishId,
      status: order.status,     
    };
  }

  public static toDTOs(orders: OrderDetails[]): OrderDetailsDTO[] {
    return orders.map((a) => this.toDTO(a));
  }

  public static toEntity(orderDetails: any): OrderDetails {
    const entity: OrderDetails = new OrderDetails();
    if (orderDetails.orderId) entity.orderId = +orderDetails.orderId;
    if (orderDetails.orderId) entity.dishId = +orderDetails.dishId;
    if (orderDetails.status) entity.status = orderDetails.status;
    return entity;
  }

}
