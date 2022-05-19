import { getCustomRepository } from 'typeorm';
import AllergenRepository from '../../../Infrastructure/Repository/AllergenRepository';
import AllergenDTO from '../../DTO/AllergenDTO';
import AllergenMap from '../../Mapper/AllergenMap';

const GetAllergens: unknown = {
  rest: {
    method: 'GET',
    path: '/allergens',
  },
  async handler(): Promise<AllergenDTO[]> {
    const repo = getCustomRepository(AllergenRepository);
    return AllergenMap.toDTOs(await repo.getAllergens());
  },
};

export default GetAllergens;
