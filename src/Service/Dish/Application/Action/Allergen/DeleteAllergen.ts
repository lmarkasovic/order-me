import { getCustomRepository } from 'typeorm';
import AllergenRepository from '../../../Infrastructure/Repository/AllergenRepository';

const DeleteAllergen: unknown = {
  rest: {
    method: 'DELETE',
    path: '/allergens/:id',
  },
  params: {
    id: 'string',
  },
  async handler(ctx: any): Promise<number> {
    const repo = getCustomRepository(AllergenRepository);
    const deleteResult = await repo.deleteAllergen(ctx.params.id);
    this.logger.debug(deleteResult);

    if (deleteResult.affected === 1) {
      ctx.meta.$statusCode = 200;
      return +ctx.params.id;
    } else {
      ctx.meta.$statusCode = 204;
    }
  },
};

export default DeleteAllergen;
