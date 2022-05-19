import { getCustomRepository } from 'typeorm';
import TagRepository from '../../../Infrastructure/Repository/TagRepository';

const DeleteTag: unknown = {
  rest: {
    method: 'DELETE',
    path: '/tags/:id',
  },
  params: {
    id: 'string',
  },
  async handler(ctx: any): Promise<number> {
    const repo = getCustomRepository(TagRepository);
    const deleteResult = await repo.deleteTag(ctx.params.id);
    this.logger.debug(deleteResult);

    if (deleteResult.affected === 1) {
      ctx.meta.$statusCode = 200;
      return +ctx.params.id;
    } else {
      ctx.meta.$statusCode = 204;
    }
  },
};

export default DeleteTag;
