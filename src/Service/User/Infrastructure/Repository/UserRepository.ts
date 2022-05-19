import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { User } from '../../../../Entity/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  async createUser(): Promise<any> {
    // todo
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }

  async getUser(id: number): Promise<User> {
    return this.findOne(id);
  }

  async getUsers(): Promise<User[]> {
    return this.find();
  }

  async updateUser(): Promise<any> {
    // todo
  }
}
