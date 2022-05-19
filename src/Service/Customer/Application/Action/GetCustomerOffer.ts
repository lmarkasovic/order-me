import { Errors } from 'moleculer-web';
import { getCustomRepository } from 'typeorm';
import CustomerOfferRepository from '../../Infrastructure/Repository/CustomerOfferRepository';
import CustomerOfferDTO from '../DTO/CustomerOfferDTO';
import CustomerOfferMap from '../Mapper/CustomerOfferMap';
import _ from 'lodash';
const util = require('util');

const GetCustomerOffer: unknown = {
  rest: {
    method: 'GET',
    path: '/:id/offer',
  },
  async handler(ctx: any): Promise<CustomerOfferDTO> {
    const repo = getCustomRepository(CustomerOfferRepository);
    const customerOffer = await repo.getCustomerOffer(+ctx.params.id);
    console.log(util.inspect(customerOffer, {showHidden: false, depth: null}));
    if (customerOffer) {
      return CustomerOfferMap.toDTO(customerOffer);
    }
    throw new Errors.NotFoundError('NOT_FOUND', null);
  },
};

export default GetCustomerOffer;
