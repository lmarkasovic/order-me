import { CustomerType } from '../../../../Entity/CustomerType';
import CustomerTypeDTO from '../DTO/CustomerTypeDTO';

export default class CustomerTypeMap {
  public static toDTO(customerType: CustomerType): CustomerTypeDTO {
    return {
      id: customerType?.id || null,
      description: customerType?.description || null,
    };
  }

  public static toDTOs(customerTypes: CustomerType[]): CustomerTypeDTO[] {
    return customerTypes.map((a) => this.toDTO(a));
  }
}
