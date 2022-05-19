import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Customer } from './Customer';
import { OrderDetails } from './OrderDetails';
import { OfferDetail } from './OfferDetail';
import { Normative } from './Normative';

@Entity({ name: 'price_list' })
export class PriceList {
  @PrimaryGeneratedColumn()
  PK: number;

  @Column({
    name: 'id',
    nullable: true,
  })
  id: number;

  @Column({
    name: 'noramtive_id',
    nullable: true,
  })
  noramtiveId: number;

  @Column({
    name: 'noramtiv_price',
    nullable: true,
  })
  noramtivPrice: number;

  @Column({
    name: 'cust_type_id',
    nullable: false,
  })
  custTypeId: number;

  @ManyToOne(() => OfferDetail, (offerDetail) => offerDetail.normativePrices)
  @JoinColumn([{ name: 'id', referencedColumnName: 'priceListId' }])
  offerDetail?: OfferDetail;

  @ManyToOne(() => Normative, (normative) => normative.normativePrices)
  @JoinColumn([{ name: 'noramtive_id', referencedColumnName: 'id' }])
  normative: Normative;

  @OneToOne(() => OrderDetails)
  @JoinColumn([{ name: 'id', referencedColumnName: 'priceListId' }])
  orderDetails?: OrderDetails;
}
