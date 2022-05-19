import { Errors } from 'moleculer-web';
import { getCustomRepository } from 'typeorm';
import TagRepository from '../../../Infrastructure/Repository/TagRepository';
import TagDTO from '../../DTO/TagDTO';
import TagMap from '../../Mapper/TagMap';

const GetTag: unknown = {
  rest: {
    method: 'GET',
    path: '/tags/:id',
  },
  params: {
    id: 'number',
  },
  async handler(ctx: any): Promise<TagDTO> {
    const repo = getCustomRepository(TagRepository);
    const tag = await repo.getTag(ctx.params.id);
    if (tag) {
      return TagMap.toDTO(tag);
    }
    throw new Errors.NotFoundError('NOT_FOUND', null);
  },
};

export default GetTag;
