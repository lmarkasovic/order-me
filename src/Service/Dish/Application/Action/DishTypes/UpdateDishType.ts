import { getCustomRepository } from 'typeorm';
import DishTypeRepository from '../../../Infrastructure/Repository/DishTypeRepository';
import DishTypeDTO from '../../DTO/DishTypeDTO';
import DishTypeMap from '../../Mapper/DishTypeMap';
import UpdateDishTypeSchema from '../../Schema/UpdateDishTypeSchema';

const UpdateDishType: unknown = {
  rest: {
    method: 'PATCH',
    path: 'dish-types/:id',
  },
  params: UpdateDishTypeSchema,
  async handler(ctx: any): Promise<DishTypeDTO> {
    const repo = getCustomRepository(DishTypeRepository);
    const dishType = await repo.updateDishType(DishTypeMap.toEntity(ctx.params));
    return DishTypeMap.toDTO(dishType);
  },
};

export default UpdateDishType;
