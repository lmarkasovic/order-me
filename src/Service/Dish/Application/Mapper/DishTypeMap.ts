import { DishType } from '../../../../Entity/DishType';
import DishTypeDTO from '../DTO/DishTypeDTO';

export default class DishTypeMap {
  public static toDTO(dishType: DishType): DishTypeDTO {
    return {
      id: dishType.id,
      desHR: dishType.desHr,
      desEN: dishType.desEng,
    };
  }

  public static toDTOs(dishTypes: DishType[]): DishTypeDTO[] {
    return dishTypes.map((a) => this.toDTO(a));
  }

  public static toEntity(dishType: any): DishType {
    const entity: DishType = new DishType();
    if (dishType.id) entity.id = +dishType.id;
    if (dishType.desHR) entity.desHr = dishType.desHR;
    if (dishType.desEN) entity.desEng = dishType.desEN;
    return entity;
  }
}
