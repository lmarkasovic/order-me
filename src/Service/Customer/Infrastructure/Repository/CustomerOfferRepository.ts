import { EntityRepository, Repository } from 'typeorm';
import { Customer } from '../../../../Entity/Customer';
import { DishAllergen } from '../../../../Entity/DishAllergen';
import { PriceList } from '../../../../Entity/PriceList';

@EntityRepository(Customer)
export default class CustomerOfferRepository extends Repository<Customer> {
  async getCustomerOffer(_id: number): Promise<Customer> {
    return (
      this.createQueryBuilder('customer')
        .innerJoinAndSelect('customer.customerInfo', 'childCustomerInfo')
        .innerJoinAndSelect('customer.location', 'Location')
        .leftJoinAndSelect('Location.offers', 'Offers')
        .leftJoinAndSelect('Offers.offerDetail', 'OfferDetail')
        .innerJoinAndSelect('OfferDetail.dish', 'Dishes')
        .leftJoinAndSelect('customer.customerAllergens', 'customerAllergensList')
        .leftJoinAndMapOne(
          'OfferDetail.priceList',
          PriceList,
          'PriceList',
          'PriceList.cust_type_id = childCustomerInfo.cust_type AND PriceList.id = OfferDetail.price_list_id',
        )
        .leftJoinAndMapMany(
          'Dishes.dishAllergens',
          DishAllergen,
          'DishesAllergens',
          'customerAllergensList.allergen_id = DishesAllergens.allergen_id AND Dishes.id = DishesAllergens.dish_id',
        ) // vraćaju se samo alergeni koji postoje i na djetetu
        .leftJoinAndSelect('DishesAllergens.allergen', 'DishesAllergensDetails')
        // .leftJoinAndSelect('childOfferDetail.normativePrices', 'childOfferDetailNormativePrice')
        .where({
          id: _id,
        })
        .andWhere('Offers.offerdFrom <= :offerdFrom', { offerdFrom: new Date(Date.now() + 12096e5) }) // dodano 14 dana jer lovimo za iduća 2 tjedna
        .andWhere('Offers.offerdTo >= :offerdTo', { offerdTo: new Date() })
        .getOne()
    );
  }
}
