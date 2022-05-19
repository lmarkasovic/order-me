import { Dish } from '../../../../Entity/Dish';
import DishDTO from '../DTO/DishDTO';
import DishTypeMap from './DishTypeMap';
import AllergenMap from './AllergenMap';
import TagMap from './TagMap';

export default class DishMap {
  public static toDTO(dish: Dish): DishDTO {
    return {
      id: dish.id,
      nameHR: dish.nameHr,
      nameEN: dish.nameEng,
      desHR: dish.desHr,
      desEN: dish.desEng,
      allergens: AllergenMap.toDTOs(dish.allergens || []),
      tags: TagMap.toDTOs(dish.tags || []),
      type: DishTypeMap.toDTO(dish.dishType),
    };
  }

  public static toDTOs(dishs: Dish[]): DishDTO[] {
    return dishs.map((a) => this.toDTO(a));
  }

  public static toEntity(dish: any): Dish {
    const entity: Dish = new Dish();
    if (dish.id) entity.id = +dish.id;
    if (dish.desHR) entity.desHr = dish.desHR;
    if (dish.desEN) entity.desEng = dish.desEN;
    return entity;
  }
}
