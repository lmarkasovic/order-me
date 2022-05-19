import { DeleteResult, EntityRepository, InsertResult, Repository } from 'typeorm';
import { Allergen } from '../../../../Entity/Allergen';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { ServiceBroker } from 'moleculer';

@EntityRepository(Allergen)
export default class AllergenRepository extends Repository<Allergen> {
  async saveAllergen(allergen: Allergen): Promise<Allergen> {
    // const broker = new ServiceBroker();
    return await this.save(allergen);
  }

  async deleteAllergen(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }

  async getAllergen(id: number): Promise<Allergen> {
    return this.findOne(id);
  }

  async getAllergens(): Promise<Allergen[]> {
    return this.find();
  }

  async updateAllergen(allergen: Allergen): Promise<Allergen> {
    await this.update(allergen.id, allergen);
    return await this.findOne(allergen.id);
  }
}
