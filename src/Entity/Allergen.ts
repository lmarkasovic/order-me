import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DishAllergen } from './DishAllergen';
import { CustomerAllergen } from './CustomerAllergen';

@Entity({ name: 'allergens' })
export class Allergen extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'des_hr',
    nullable: true,
  })
  desHr: string;

  @Column({
    name: 'des_eng',
    nullable: true,
  })
  desEng: string;

  @OneToMany(() => DishAllergen, (dishAllergens) => dishAllergens.allergen)
  dishAllergens: DishAllergen[];

  @OneToMany(() => CustomerAllergen, (customerAllergens) => customerAllergens.allergen)
  customerAllergens: CustomerAllergen[];
}
