import { Customer } from '../../../../Entity/Customer';
import CustomerDTO from '../DTO/CustomerDTO';
import CustomerTypeMap from './CustomerTypeMap';

export default class CustomerMap {
  public static toDTO(customer: Customer): CustomerDTO {
    return {
      id: customer.id,
      publicKey: customer.customerInfo.publicKey,
      oib: customer.customerInfo.oib,
      name: customer.customerInfo.name,
      address: {
        addressLine1: customer.customerInfo.addressLine1,
        city: customer.customerInfo.city,
        floor: customer.customerInfo.floor,
        postalCode: customer.customerInfo.postalCode,
        streetNo: customer.customerInfo.streetNo,
      },
      type: CustomerTypeMap.toDTO(customer.customerInfo.customerType),
      customerHighLvl1: customer.customerHighLvl1,
      customerHighLvl2: customer.customerHighLvl2,
      customerHighLvl3: customer.customerHighLvl3,
      active: customer.active,
      childs: CustomerMap.toDTOs(customer.childs || []),
    };
  }

  public static toDTOs(customers: Customer[]): CustomerDTO[] {
    return customers.map((a) => this.toDTO(a));
  }

  // public static toEntity(allergen: any): Allergen {
  //   const entity: Allergen = new Cus();
  //   if (allergen.id) entity.id = +allergen.id;
  //   if (allergen.desHR) entity.desHr = allergen.desHR;
  //   if (allergen.desEN) entity.desEng = allergen.desEN;
  //   return entity;
  // }
}
