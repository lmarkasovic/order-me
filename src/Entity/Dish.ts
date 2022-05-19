import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
} from 'typeorm';
import { DishAllergen } from './DishAllergen';
import { DishType } from './DishType';
import { OfferDetail } from './OfferDetail';
import { DishTag } from './DishTag';
import { Allergen } from './Allergen';
import { Tag } from './Tag';

@Index('type_id_fk_idx', ['typeId'], {})
@Entity({ name: 'dishes' })
export class Dish {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name_hr', nullable: true, length: 255 })
  nameHr: string | null;

  @Column('mediumtext', { name: 'des_hr', nullable: true })
  desHr: string | null;

  @Column('varchar', { name: 'name_eng', nullable: true, length: 255 })
  nameEng: string | null;

  @Column('mediumtext', { name: 'des_eng', nullable: true })
  desEng: string | null;

  @Column('int', { name: 'type_id', nullable: true })
  typeId: number | null;

  @ManyToOne(() => OfferDetail, (offerDetail) => offerDetail.dish)
  @JoinColumn([{ name: 'id', referencedColumnName: 'dishId' }])
  offerDetail: OfferDetail;

  @OneToMany(() => DishTag, (x) => x.dish)
  dishTags: DishTag[];

  @OneToMany(() => DishAllergen, (x) => x.dish)
  dishAllergens: DishAllergen[];

  @ManyToMany(() => Allergen)
  @JoinTable({ name: 'dish_allergens', joinColumn: { name: 'dish_id' }, inverseJoinColumn: { name: 'allergen_id' } })
  allergens: Allergen[];

  @ManyToMany(() => Tag)
  @JoinTable({ name: 'dish_tag', joinColumn: { name: 'dish_id' }, inverseJoinColumn: { name: 'tag_id' } })
  tags: Tag[];

  @OneToOne(() => DishType, { eager: true })
  @JoinColumn({ name: 'type_id', referencedColumnName: 'id' })
  dishType: DishType;

}
