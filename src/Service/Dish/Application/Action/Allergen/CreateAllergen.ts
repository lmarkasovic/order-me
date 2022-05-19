import { getCustomRepository } from 'typeorm';
import AllergenRepository from '../../../Infrastructure/Repository/AllergenRepository';
import AllergenMap from '../../Mapper/AllergenMap';
import AllergenSchema from '../../Schema/CreateAllergenSchema';
import AllergenDTO from '../../DTO/AllergenDTO';

const CreateAllergen: unknown = {
  rest: {
    method: 'POST',
    path: 'allergens',
  },
  params: AllergenSchema,
  async handler(ctx: any): Promise<AllergenDTO> {
    const repo = getCustomRepository(AllergenRepository);
    const allergen = await repo.saveAllergen(AllergenMap.toEntity(ctx.params));
    return AllergenMap.toDTO(allergen);
  },
};

export default CreateAllergen;
