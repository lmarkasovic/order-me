import { Tag } from '../../../../Entity/Tag';
import TagDTO from '../DTO/TagDTO';
import { ServiceBroker } from 'moleculer';

const logger = new ServiceBroker().logger;

export default class TagMap {
  public static toDTO(tag: Tag): TagDTO {
    return {
      id: tag.id,
      des: tag.des,
    };
  }

  public static toDTOs(tags: Tag[]): TagDTO[] {
    // logger.error(tags);
    // if (tags) return tags.map((t) => this.toDTO(t));
    // else return [];
    return tags.map((t) => this.toDTO(t));
  }

  public static toEntity(tag: any): Tag {
    const newTag = new Tag();
    newTag.des = tag.des;
    return newTag;
  }
}
