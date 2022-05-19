import { EntityRepository, LessThan, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { Order } from '../../../../Entity/Order';
import { DishAllergen } from '../../../../Entity/DishAllergen';
import { ServiceBroker } from 'moleculer';
import { PriceList } from '../../../../Entity/PriceList';

const logger = new ServiceBroker().logger;

@EntityRepository(Order)
export default class OrderRepository extends Repository<Order> {

  async getOrders(customerId: number, fromDate: Date, toDate: Date): Promise<Order[]> {
    logger.error(customerId);
    return this.createQueryBuilder('order')
      .innerJoinAndSelect('order.orderDetails', 'orderDetails')
      .innerJoinAndSelect('orderDetails.dish', 'orderDish')
      .innerJoinAndSelect('order.customerOrderedFor', 'customerOrderedFor')
      .innerJoinAndSelect('customerOrderedFor.customerInfo', 'customerInfo')
      .leftJoinAndSelect('customerOrderedFor.customerAllergens', 'customerAllergens')
      .leftJoinAndMapMany(
        'orderDish.dishAllergens',
        DishAllergen,
        'customerDishesAllergens',
        'customerAllergens.allergen_id = customerDishesAllergens.allergen_id AND orderDish.id = customerDishesAllergens.dish_id',
      ) // vraćaju se samo alergeni koji postoje i na customeru
      .leftJoinAndMapOne(
        'orderDetails.priceList',
        PriceList,
        'PriceList',
        'PriceList.cust_type_id = customerInfo.cust_type AND PriceList.id = orderDetails.price_list_id',
      )
      .leftJoinAndSelect('customerDishesAllergens.allergen', 'customerDishesAllergensDetails')
      .where({
        orderedBy: customerId,
        //orderDate: MoreThanOrEqual(new Date(fromDate)) || LessThanOrEqual(new Date(toDate)),
      })
      .andWhere('orderDetails.orderedDate >= :fromDateConv', { fromDateConv: new Date(fromDate)}) //za koje dane dish vrijedi
      .andWhere('orderDetails.orderedDate <= :toDateConv', { toDateConv: new Date(toDate)}) //za koje dane dish vrijedi
      .getMany();
  }

  async saveOrder(order: Order): Promise<Order> {
    return await this.save(order); 
  }
}
