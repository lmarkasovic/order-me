import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { Tag } from '../../../../Entity/Tag';

@EntityRepository(Tag)
export default class TagRepository extends Repository<Tag> {
  async createTag(tag: Tag): Promise<Tag> {
    return this.save(tag);
  }

  async deleteTag(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }

  async getTag(id: number): Promise<Tag> {
    return this.findOne(id);
  }

  async getTags(): Promise<Tag[]> {
    return this.find();
  }

  async updateTag(): Promise<any> {
    // todo
  }
}
