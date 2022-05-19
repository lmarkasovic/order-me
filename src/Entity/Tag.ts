import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DishTag } from './DishTag';

@Entity({ name: 'tags' })
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'des',
    length: 255,
    nullable: true,
  })
  des: string;

  @OneToMany(() => DishTag, (dishTags) => dishTags.tag)
  dishTags: DishTag[];
}
