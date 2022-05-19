import { getCustomRepository } from 'typeorm';
import DishTypeRepository from '../../../Infrastructure/Repository/DishTypeRepository';
import DishTypeMap from '../../Mapper/DishTypeMap';
import DishTypeDTO from '../../DTO/DishTypeDTO';
import CreateDishTypeSchema from '../../Schema/CreateDishTypeSchema';

const CreateDishType: unknown = {
  rest: {
    method: 'POST',
    path: 'dish-types',
  },
  params: CreateDishTypeSchema,
  async handler(ctx: any): Promise<DishTypeDTO> {
    const repo = getCustomRepository(DishTypeRepository);
    const dishType = await repo.saveDishType(DishTypeMap.toEntity(ctx.params));
    return DishTypeMap.toDTO(dishType);
  },
};

export default CreateDishType;
