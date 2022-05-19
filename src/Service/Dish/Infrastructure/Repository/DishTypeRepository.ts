import { DeleteResult, EntityRepository, InsertResult, Repository } from 'typeorm';
import { DishType } from '../../../../Entity/DishType';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { ServiceBroker } from 'moleculer';

@EntityRepository(DishType)
export default class DishTypeRepository extends Repository<DishType> {
  async saveDishType(dishType: DishType): Promise<DishType> {
    // const broker = new ServiceBroker();
    return await this.save(dishType);
  }

  async deleteDishType(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }

  async getDishType(id: number): Promise<DishType> {
    return this.findOne(id);
  }

  async getDishTypes(): Promise<DishType[]> {
    return this.find();
  }

  async updateDishType(dishType: DishType): Promise<DishType> {
    await this.update(dishType.id, dishType);
    return await this.findOne(dishType.id);
  }
}
