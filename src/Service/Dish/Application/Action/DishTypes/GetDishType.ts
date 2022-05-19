import { Errors } from 'moleculer-web';
import { getCustomRepository } from 'typeorm';
import DishTypeRepository from '../../../Infrastructure/Repository/DishTypeRepository';
import DishTypeDTO from '../../DTO/DishTypeDTO';
import DishTypeMap from '../../Mapper/DishTypeMap';

const GetDishType: unknown = {
  rest: {
    method: 'GET',
    path: '/dish-types/:id',
  },
  params: {
    id: 'string',
  },
  async handler(ctx: any): Promise<DishTypeDTO> {
    const repo = getCustomRepository(DishTypeRepository);
    const dishType = await repo.getDishType(+ctx.params.id);
    if (dishType) {
      return DishTypeMap.toDTO(dishType);
    }
    throw new Errors.NotFoundError('NOT_FOUND', null);
  },
};

export default GetDishType;
