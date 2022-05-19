import { getCustomRepository } from 'typeorm';
import DishRepository from '../../../Infrastructure/Repository/DishRepository';

const DeleteDish: unknown = {
  rest: {
    method: 'DELETE',
    path: '/:id',
  },
  params: {
    id: 'string',
  },
  async handler(ctx: any): Promise<number> {
    const repo = getCustomRepository(DishRepository);
    const deleteResult = await repo.deleteDish(ctx.params.id);
    this.logger.debug(deleteResult);

    if (deleteResult.affected === 1) {
      ctx.meta.$statusCode = 200;
      return +ctx.params.id;
    } else {
      ctx.meta.$statusCode = 204;
    }
  },
};

export default DeleteDish;
