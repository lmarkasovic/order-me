import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { NormativePrice } from './NormativePrice';
import { OrderDetails } from './OrderDetails';
import { Offer } from './Offer';
import { Dish } from './Dish';
import { PriceList } from './PriceList';

@Index('offer_detail_normativ_price_indx', ['priceListId'], {})
@Index('offer_id_fk_idx', ['offerId', 'dishId'], {})
@Entity({ name: 'offer_detail' })
export class OfferDetail {
  @PrimaryGeneratedColumn({
    name: 'PK',
  })
  PK: number;

  @Column('int', { name: 'offer_id', nullable: true })
  offerId: number | null;

  @Column('int', { name: 'dish_id', nullable: true })
  dishId: number | null;

  @Column('date', { name: 'offered_date', nullable: true })
  offeredDate: Date | null;

  @Column('int', { name: 'price_list_id', nullable: true })
  priceListId: number | null;

  @OneToMany(() => NormativePrice, (normativePrice) => normativePrice.offerDetail)
  normativePrices: NormativePrice[];

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.offerDetail)
  orderDetails: OrderDetails[];

  @OneToMany(() => Dish, (dish) => dish.offerDetail)
  dish: Dish[];

  @ManyToOne(() => Offer, (offer) => offer.offerDetail)
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;

  @OneToMany(() => PriceList, (priceList) => priceList.offerDetail)
  priceList: PriceList;
}
