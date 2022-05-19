import { getCustomRepository } from 'typeorm';
import AllergenRepository from '../../../Infrastructure/Repository/AllergenRepository';
import AllergenDTO from '../../DTO/AllergenDTO';
import AllergenMap from '../../Mapper/AllergenMap';
import UpdateAllergenSchema from '../../Schema/UpdateAllergenSchema';

const UpdateAllergen: unknown = {
  rest: {
    method: 'PATCH',
    path: 'allergens/:id',
  },
  params: UpdateAllergenSchema,
  async handler(ctx: any): Promise<AllergenDTO> {
    const repo = getCustomRepository(AllergenRepository);
    const allergen = await repo.updateAllergen(AllergenMap.toEntity(ctx.params));
    return AllergenMap.toDTO(allergen);
  },
};

export default UpdateAllergen;
