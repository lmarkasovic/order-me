import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Dish } from './Dish';
import { Tag } from './Tag';

@Index('dish_allergens_dish_indx', ['dishId'], {})
@Index('dish_tag_dish_indx', ['dishId'], {})
@Index('dish_tag_tag_indx', ['tagId'], {})
@Entity({ name: 'dish_tag' })
export class DishTag {
  @PrimaryGeneratedColumn({
    name: 'PK',
  })
  PK: number;

  @Column('int', { name: 'dish_id', nullable: true })
  dishId: number | null;

  @Column('int', { name: 'tag_id', nullable: true })
  tagId: number | null;

  @ManyToOne(() => Tag, (tag) => tag.dishTags)
  @JoinColumn([{ name: 'tag_id', referencedColumnName: 'id' }])
  tag: Tag;

  @ManyToOne(() => Dish, (dish) => dish.dishAllergens)
  @JoinColumn([{ name: 'dish_id', referencedColumnName: 'id' }])
  dish: Dish;
}
