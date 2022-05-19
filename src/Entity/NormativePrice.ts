import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OfferDetail } from './OfferDetail';
import { Normative } from './Normative';

@Index('id_normativ_unique', ['id', 'noramtiveId'], { unique: true })
@Index('id', ['id'], {})
@Index('noramtive_id', ['noramtiveId'], {})
@Entity({ name: 'price_list' })
export class NormativePrice {
  @PrimaryGeneratedColumn({
    name: 'PK',
  })
  PK: number;

  @Column('int', { name: 'id', nullable: true })
  id: number | null;

  @Column('int', { name: 'noramtive_id', nullable: true })
  noramtiveId: number | null;

  @Column('int', { name: 'noramtiv_price', nullable: true })
  noramtivPrice: number | null;

  @ManyToOne(() => OfferDetail, (offerDetail) => offerDetail.normativePrices)
  @JoinColumn([{ name: 'id', referencedColumnName: 'priceListId' }])
  offerDetail?: OfferDetail;

  @ManyToOne(() => Normative, (normative) => normative.normativePrices)
  @JoinColumn([{ name: 'noramtive_id', referencedColumnName: 'id' }])
  normative: Normative;
}
