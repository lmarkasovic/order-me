import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { Dish } from '../../../../Entity/Dish';
import { ServiceBroker } from 'moleculer';

@EntityRepository(Dish)
export default class DishRepository extends Repository<Dish> {
  async createDish(dish: Dish): Promise<Dish> {
    const broker = new ServiceBroker();
    return this.save(dish);
  }

  async deleteDish(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }

  async getDish(id: number): Promise<Dish> {
    return this.findOne(id, { relations: ['dishType', 'allergens', 'tags'] });
  }

  async getDishes(): Promise<Dish[]> {
    return this.find({ relations: ['dishType', 'allergens', 'tags'] });
  }

  async updateDish(): Promise<any> {
    // todo
  }
}
