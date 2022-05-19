import { forEach } from 'lodash';
import { Dish } from '../../../../Entity/Dish';
import { Order } from '../../../../Entity/Order';
import { OrderDetails } from '../../../../Entity/OrderDetails';
import OrderDTO from '../DTO/OrderDTO';

export default class OrderMap {
  public static toDTO(order: Order): OrderDTO {
    return {
      orderId: order.id,
      orderedBy: order.orderedBy,
      orderDate: new Date(order.orderDate).toLocaleDateString('hr'),
      orderDetails: order.orderDetails.map(o => ({
        status: o.status,
        orderedDate: o.orderedDate ? new Date(o.orderedDate).toLocaleDateString() : null,
        offerId: o.offerId,
        canceledDate: o.canceledDate ? new Date(o.canceledDate).toLocaleDateString('hr') : null,
        customerInfo: order.customerOrderedFor.customerInfo ? order.customerOrderedFor.customerInfo : null,
        dish: {
          dishId: o.dish.id,
          price: o.priceList.noramtivPrice,
          dishNameHR: o.dish.nameHr,
          dishNameENG: o.dish.nameEng,
          dishDescriptionHR: o.dish.desHr,
          dishDescriptionENG: o.dish.desEng,
          listOfCustomerRelevantAllergens: o.dish.dishAllergens.map((a) => ({
            allergenDescriptionHR: a.allergen.desHr,
            allergenDescriptionENG: a.allergen.desEng,
          })),
        }
        })),    
    };
  }

  public static toDTOs(orders: Order[]): OrderDTO[] {
    return orders.map((a) => this.toDTO(a));
  }

  public static toEntity(order: any): Order {
    const entity: Order = new Order();
    entity.orderDetails = [];
    entity.orderDate = new Date(Date.now()); //ovo je timestamp kreiranja ordera, dirty
    if (order.orderedBy) entity.orderedBy = order.orderedBy;
    if (order.orderedFor) entity.orderedFor = order.orderedFor;
    //if (order.orderDate) entity.orderDate = order.orderDate;
    for (let i=0; i<order.orderDetails.length; i++){   
      entity.orderDetails.push(new OrderDetails());
      entity.orderDetails[i].orderedDate = order.orderDetails[i].orderedDate; //timestamp koji označava za koje dane dish vrijedi
      entity.orderDetails[i].offerId = order.orderDetails[i].offerId;
      entity.orderDetails[i].dishId = order.orderDetails[i].dishId;
      entity.orderDetails[i].priceListId = order.orderDetails[i].priceListId;
      //console.log(entity.orderDetails[i]);
    }
    return entity;
  }
}
