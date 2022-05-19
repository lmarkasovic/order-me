import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'dish_types' })
export class DishType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'des_hr',
    nullable: false,
  })
  desHr: string;

  @Column({
    name: 'des_eng',
    nullable: false,
  })
  desEng: string;
}
