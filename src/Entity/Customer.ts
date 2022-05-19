import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CustomerInfo } from './CustomerInfo';
import { Order } from './Order';
import { Offer } from './Offer';
import { CustomerAllergen } from './CustomerAllergen';

@Entity({ name: 'customers' })
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'customer_high_lv1',
    nullable: true,
  })
  customerHighLvl1: number;

  @Column({
    name: 'customer_high_lv2',
    nullable: true,
  })
  customerHighLvl2: number;

  @Column({
    name: 'customer_high_lv3',
    nullable: true,
  })
  customerHighLvl3: number;

  @Column({
    nullable: true,
  })
  balance: number;

  @Column({
    name: 'months_charge',
    nullable: true,
  })
  monthsCharge: number;

  @Column({
    name: 'payment_responsible',
    nullable: true,
  })
  paymentResponsible: number;

  @Column({
    name: 'external_key1',
    nullable: true,
  })
  externalKey1: string;

  @Column({
    name: 'external_key2',
    nullable: true,
  })
  externalKey2: string;

  @Column({
    nullable: true,
  })
  active: number;

  @ManyToOne(() => Customer, (customer) => customer.id)
  @JoinColumn({ name: 'customer_high_lv3' })
  public parent?: Customer;

  @OneToMany(() => Customer, (customer) => customer.parent)
  public children?: Customer[];

  @OneToOne(() => Customer, (customer) => customer.id)
  @JoinColumn({ name: 'customer_high_lv2' })
  public location: Customer;

  @OneToOne(() => CustomerInfo, { eager: true })
  @JoinColumn({ name: 'id', referencedColumnName: 'customerId' })
  customerInfo: CustomerInfo;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];

  @OneToMany(() => Offer, (offer) => offer.custLoc)
  offers?: Offer[];

  @OneToMany(() => CustomerAllergen, (customerAllergens) => customerAllergens.customer)
  customerAllergens: CustomerAllergen[];

  @ManyToMany(() => Customer)
  @JoinTable({ name: 'customer_parent', joinColumn: { name: 'parent_id' }, inverseJoinColumn: { name: 'id' } })
  childs: Customer[];
}
