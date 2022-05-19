import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import Role from './Role';
import { CustomerInfo } from './CustomerInfo';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  fname: string;

  @Column({
    nullable: true,
  })
  lname: string;

  @Column({
    nullable: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  username: string;

  @Column({
    nullable: true,
  })
  password: string;

  @Column({
    name: 'role_id',
    nullable: true,
  })
  roleId: number;

  @Column({
    nullable: false,
  })
  language: string;

  @OneToOne(() => Role)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  role: Role;

  @OneToOne(() => CustomerInfo, { eager: true })
  @JoinColumn({ name: 'id', referencedColumnName: 'userId' })
  customerInfo: CustomerInfo;
}
