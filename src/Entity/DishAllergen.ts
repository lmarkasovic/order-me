import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Allergen } from './Allergen';
import { Dish } from './Dish';

@Index('unique_dish_alllergens', ['dishId', 'allergenId'], { unique: true })
@Index('dish_allergens_dish_indx', ['dishId'], {})
@Index('dish_allergens_allergen_indx', ['allergenId'], {})
@Entity({ name: 'dish_allergens' })
export class DishAllergen {
  @PrimaryGeneratedColumn({
    name: 'PK',
  })
  PK: number;

  @Column('int', { name: 'dish_id', nullable: true })
  dishId: number | null;

  @Column('int', { name: 'allergen_id', nullable: true })
  allergenId: number | null;

  @ManyToOne(() => Allergen, (allergen) => allergen.dishAllergens)
  @JoinColumn([{ name: 'allergen_id', referencedColumnName: 'id' }])
  allergen: Allergen;

  @ManyToOne(() => Dish, (dish) => dish.dishAllergens)
  @JoinColumn([{ name: 'dish_id', referencedColumnName: 'id' }])
  dish: Dish;
}
