import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'customer_type' })
export class CustomerType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'description',
    nullable: false,
  })
  description: string;
}
