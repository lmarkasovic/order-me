import { getCustomRepository } from 'typeorm';
import TagRepository from '../../../Infrastructure/Repository/TagRepository';
import TagDTO from '../../DTO/TagDTO';
import TagMap from '../../Mapper/TagMap';

const GetTags: unknown = {
  rest: {
    method: 'GET',
    path: '/tags',
  },
  async handler(): Promise<TagDTO[]> {
    const repo = getCustomRepository(TagRepository);
    return TagMap.toDTOs(await repo.getTags());
  },
};

export default GetTags;
