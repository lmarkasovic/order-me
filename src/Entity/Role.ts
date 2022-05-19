import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export default class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'des', nullable: true, length: 255 })
  des: string | null;
}
