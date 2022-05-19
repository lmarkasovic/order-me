import { Errors } from 'moleculer-web';
import { getCustomRepository } from 'typeorm';
import AllergenRepository from '../../../Infrastructure/Repository/AllergenRepository';
import AllergenDTO from '../../DTO/AllergenDTO';
import AllergenMap from '../../Mapper/AllergenMap';

const GetAllergen: unknown = {
  rest: {
    method: 'GET',
    path: '/allergens/:id',
  },
  params: {
    id: 'string',
  },
  async handler(ctx: any): Promise<AllergenDTO> {
    const repo = getCustomRepository(AllergenRepository);
    const allergen = await repo.getAllergen(+ctx.params.id);
    if (allergen) {
      return AllergenMap.toDTO(allergen);
    }
    throw new Errors.NotFoundError('NOT_FOUND', null);
  },
};

export default GetAllergen;
