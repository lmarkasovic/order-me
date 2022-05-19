import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Customer } from './Customer';
import { OfferDetail } from './OfferDetail';

@Index('offers_cust_loc_indx', ['custLocId'], {})
@Entity({ name: 'offers' })
export class Offer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('date', { name: 'offerd_from', nullable: false })
  offerdFrom: Date | null;

  @Column('date', { name: 'offerd_to', nullable: false })
  offerdTo: Date | null;

  @Column('int', { name: 'cust_loc_id', nullable: true })
  custLocId: number | null;

  @Column('date', { name: 'orderable_until', nullable: false })
  orderableUntil: Date | null;

  @ManyToOne(() => Customer, (customer) => customer.offers)
  @JoinColumn([{ name: 'cust_loc_id', referencedColumnName: 'id' }])
  custLoc?: Customer;

  @OneToMany(() => OfferDetail, (offerDetail) => offerDetail.offer)
  offerDetail: OfferDetail[];
}
