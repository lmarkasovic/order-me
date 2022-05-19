import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { CustomerType } from './CustomerType';

@Entity({ name: 'customer_info' })
export class CustomerInfo {
  @PrimaryGeneratedColumn({
    name: 'customer_id',
  })
  customerId: number;

  @Column({
    name: 'public_key',
    nullable: true,
  })
  publicKey: string;

  @Column({
    nullable: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  city: string;

  @Column({
    name: 'postal_code',
    nullable: true,
  })
  postalCode: number;

  @Column({
    name: 'Address_line1',
    nullable: true,
  })
  addressLine1: string;

  @Column({
    name: 'Address_line2',
    nullable: true,
  })
  addressLine2: string;

  @Column({
    name: 'street_no',
    nullable: true,
  })
  streetNo: string;

  @Column({
    nullable: true,
  })
  floor: string;

  @Column({
    name: 'class_sting',
    nullable: true,
  })
  classSting: string;

  @Column({
    nullable: true,
  })
  oib: string;

  @Column({
    name: 'external_code1',
    nullable: true,
  })
  externalCode1: string;

  @Column({
    name: 'external_code2',
    nullable: true,
  })
  externalCode2: string;

  @Column({
    name: 'user_id',
    nullable: true,
  })
  userId: number;

  @Column({
    nullable: true,
  })
  language: string;

  @OneToOne(() => CustomerType, { eager: true })
  @JoinColumn({ name: 'cust_type', referencedColumnName: 'id' })
  customerType: CustomerType;
}
