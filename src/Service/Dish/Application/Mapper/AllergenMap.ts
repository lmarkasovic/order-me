import { Allergen } from '../../../../Entity/Allergen';
import AllergenDTO from '../DTO/AllergenDTO';

export default class AllergenMap {
  public static toDTO(allergen: Allergen): AllergenDTO {
    return {
      id: allergen.id,
      desHR: allergen.desHr,
      desEN: allergen.desEng,
    };
  }

  public static toDTOs(allergens: Allergen[]): AllergenDTO[] {
    return allergens.map((a) => this.toDTO(a));
  }

  public static toEntity(allergen: any): Allergen {
    const entity: Allergen = new Allergen();
    if (allergen.id) entity.id = +allergen.id;
    if (allergen.desHR) entity.desHr = allergen.desHR;
    if (allergen.desEN) entity.desEng = allergen.desEN;
    return entity;
  }
}
