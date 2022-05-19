import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Order } from './Order';
import { OfferDetail } from './OfferDetail';
import { Offer } from './Offer';
import { Dish } from './Dish';
import { PriceList } from './PriceList';

@Entity({ name: 'order_details' })
export class OrderDetails {
  @PrimaryGeneratedColumn({
    name: 'PK',
  })
  PK: number;

  @Column({
    name: 'order_id',
    nullable: true,
  })
  orderId: number;

  @Column({
    name: 'offer_id',
    nullable: true,
  })
  offerId: number;

  @Column({
    name: 'dish_id',
    nullable: true,
  })
  dishId: number;

  @Column({
    name: 'price_list_id',
    nullable: true,
  })
  priceListId: number;

  @Column({
    name: 'ordered_date',
    nullable: true,
  })
  orderedDate: Date;

  @Column({
    name: 'canceled_date',
    nullable: true,
  })
  canceledDate: Date;

  @Column('enum', { name: 'status', enum: ['ordered', 'canceled'] })
  status: 'ordered' | 'canceled';

  @ManyToOne(() => Order, (order) => order.orderDetails, {cascade: true})
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => OfferDetail, (offerDetail) => offerDetail.orderDetails)
  @JoinColumn([
    { name: 'offer_id', referencedColumnName: 'offerId' },
    { name: 'dish_id', referencedColumnName: 'dishId' },
  ])
  offerDetail: OfferDetail;

  @OneToOne(() => Offer)
  @JoinColumn({ name: 'offer_id', referencedColumnName: 'id' })
  offer: Offer;

  @OneToOne(() => Dish)
  @JoinColumn({ name: 'dish_id', referencedColumnName: 'id' })
  dish: Dish;

  @OneToOne(() => PriceList)
  priceList: PriceList;
}

