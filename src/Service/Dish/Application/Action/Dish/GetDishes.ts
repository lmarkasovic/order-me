import { getCustomRepository } from 'typeorm';
import DishMap from '../../Mapper/DishMap';
import DishDTO from '../../DTO/DishDTO';
import DishRepository from '../../../Infrastructure/Repository/DishRepository';
import _ from 'lodash';

const GetDishes: unknown = {
  rest: {
    method: 'GET',
    path: '/',
  },
  async handler(): Promise<DishDTO[]> {
    const repo = getCustomRepository(DishRepository);
    let dishes = await repo.getDishes();
    dishes = _.orderBy(dishes, ['id'], ['desc']);
    return DishMap.toDTOs(dishes);
  },
};

export default GetDishes;
