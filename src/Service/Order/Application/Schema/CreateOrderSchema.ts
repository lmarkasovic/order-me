interface OrderDetail {
  offerId: number;
  dishId: number;
  priceListId: number;
  orderedDate: string; //za koji dan dish vrijedi
}

type OrderDetails = OrderDetail[];

export class CreateOrderSchema {
  orderedBy: number;
  orderedFor: number;
  orderDetails: OrderDetails
};
