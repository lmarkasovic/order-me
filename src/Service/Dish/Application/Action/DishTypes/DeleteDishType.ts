import { getCustomRepository } from 'typeorm';
import DishTypeRepository from '../../../Infrastructure/Repository/DishTypeRepository';

const DeleteDishType: unknown = {
  rest: {
    method: 'DELETE',
    path: '/dish-types/:id',
  },
  params: {
    id: 'string',
  },
  async handler(ctx: any): Promise<number> {
    const repo = getCustomRepository(DishTypeRepository);
    const deleteResult = await repo.deleteDishType(ctx.params.id);
    this.logger.debug(deleteResult);

    if (deleteResult.affected === 1) {
      ctx.meta.$statusCode = 200;
      return +ctx.params.id;
    } else {
      ctx.meta.$statusCode = 204;
    }
  },
};

export default DeleteDishType;
