import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../../../Entity/User';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  async authUser(username: string, password: string): Promise<User> {
    return this.findOne({ username, password }, { relations: ['role'] });
  }
}
