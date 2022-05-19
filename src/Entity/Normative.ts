import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { NormativePrice } from './NormativePrice';

@Index('normatives_id_indx', ['id'], {})
@Entity({ name: 'normatives' })
export class Normative {
  @PrimaryGeneratedColumn({
    name: 'PK',
  })
  PK: number;

  @Column('int', { name: 'id', nullable: true })
  id: number | null;

  @Column('int', { name: 'value', nullable: true })
  value: number | null;

  @OneToMany(() => NormativePrice, (normativePrice) => normativePrice.normative)
  normativePrices: NormativePrice[];
}
