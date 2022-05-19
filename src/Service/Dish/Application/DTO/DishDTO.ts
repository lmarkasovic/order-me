import DishTypeDTO from './DishTypeDTO';
import AllergenDTO from './AllergenDTO';
import TagDTO from './TagDTO';

export default interface DishDTO {
  id: number;
  nameHR: string;
  nameEN: string;
  desHR: string;
  desEN: string;
  type: DishTypeDTO;
  allergens: AllergenDTO[];
  tags: TagDTO[];
}
