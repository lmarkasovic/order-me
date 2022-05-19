import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './Customer';
import { Allergen } from './Allergen';

@Index('un_cust_aller', ['customerId', 'allergenId'], { unique: true })
@Index('customer_id', ['customerId'], {})
@Index('allergen_id', ['allergenId'], {})
@Entity({ name: 'customer_allergens' })
export class CustomerAllergen {
  @PrimaryGeneratedColumn({
    name: 'PK',
  })
  PK: number;

  @Column('int', { name: 'customer_id', nullable: true })
  customerId: number | null;

  @Column('int', { name: 'allergen_id', nullable: true })
  allergenId: number | null;

  @ManyToOne(() => Customer, (customer) => customer.customerAllergens)
  @JoinColumn([{ name: 'customer_id', referencedColumnName: 'id' }])
  customer: Customer;

  @ManyToOne(() => Allergen, (allergen) => allergen.customerAllergens)
  @JoinColumn([{ name: 'allergen_id', referencedColumnName: 'id' }])
  allergen: Allergen;
}
