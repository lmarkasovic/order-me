import { getCustomRepository } from 'typeorm';
import DishTypeRepository from '../../../Infrastructure/Repository/DishTypeRepository';
import DishTypeDTO from '../../DTO/DishTypeDTO';
import DishTypeMap from '../../Mapper/DishTypeMap';

const GetDishTypes: unknown = {
  rest: {
    method: 'GET',
    path: '/dish-types',
  },
  async handler(): Promise<DishTypeDTO[]> {
    const repo = getCustomRepository(DishTypeRepository);
    return DishTypeMap.toDTOs(await repo.getDishTypes());
  },
};

export default GetDishTypes;
