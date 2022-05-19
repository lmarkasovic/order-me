import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Customer } from './Customer';
import { OrderDetails } from './OrderDetails';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'ordered_by',
    nullable: false,
  })
  orderedBy: number;

  @Column({
    name: 'ordered_for',
    nullable: false,
  })
  orderedFor: number;

  @Column({
    name: 'order_date',
    nullable: false,
  })
  orderDate: Date;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: 'ordered_for' })
  customer: Customer;

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.order, { cascade: ['insert', 'update'] })
  orderDetails: OrderDetails[];

  @OneToOne(() => Customer, { eager: true })
  @JoinColumn({ name: 'ordered_for', referencedColumnName: 'id' })
  customerOrderedFor: Customer;
}
