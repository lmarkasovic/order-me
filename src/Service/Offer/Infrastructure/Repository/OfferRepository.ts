import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { Offer } from '../../../../Entity/Offer';

@EntityRepository(Offer)
export default class OfferRepository extends Repository<Offer> {
  async createOffer(): Promise<any> {
    // todo
  }

  async deleteOffer(id: number): Promise<DeleteResult> {
    return this.delete(id);
  }

  async getOffer(id: number): Promise<Offer> {
    return this.findOne(id);
  }

  async getOffers(): Promise<Offer[]> {
    return this.find();
  }

  async updateOffer(): Promise<any> {
    // todo
  }
}
