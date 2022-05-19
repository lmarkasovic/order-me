import { getCustomRepository } from 'typeorm';
import TagRepository from '../../../Infrastructure/Repository/TagRepository';
import TagDTO from '../../DTO/TagDTO';
import TagMap from '../../Mapper/TagMap';
import TagSchema from '../../Schema/CreateTagSchema';

const CreateTag: unknown = {
  rest: {
    method: 'POST',
    path: 'tags',
  },
  params: TagSchema,
  async handler(ctx: any): Promise<TagDTO> {
    const repo = getCustomRepository(TagRepository);
    const tag = await repo.createTag(TagMap.toEntity(ctx.params));
    return TagMap.toDTO(tag);
  },
};

export default CreateTag;
