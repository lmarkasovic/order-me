import { Errors } from 'moleculer-web';
import { getCustomRepository } from 'typeorm';
import DishRepository from '../../../Infrastructure/Repository/DishRepository';
import DishDTO from '../../DTO/DishDTO';
import DishMap from '../../Mapper/DishMap';

const GetDish: unknown = {
  rest: {
    method: 'GET',
    path: '/:id',
  },
  params: {
    id: 'string',
  },
  async handler(ctx: any): Promise<DishDTO> {
    const repo = getCustomRepository(DishRepository);
    const dish = await repo.getDish(+ctx.params.id);
    if (dish) {
      this.logger.error(dish);
      return DishMap.toDTO(dish);
    }
    throw new Errors.NotFoundError('NOT_FOUND', null);
  },
};

export default GetDish;
