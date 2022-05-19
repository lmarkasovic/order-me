import { Customer } from '../../../../Entity/Customer';
import CustomerOfferDTO from '../DTO/CustomerOfferDTO';
import { getDates } from '../../../../Common/Dates';

const curr = new Date();
const first = curr.getDate() + 1 - curr.getDay();
const last = first + 13;

const firstday = new Date(curr.setDate(first));
const lastday = new Date(curr.setDate(last));

export default class ParentHomeMap {
  public static toDTO(customer: Customer): CustomerOfferDTO {
    return {
      id: customer.id,
      name: customer.customerInfo.name,
      class: customer.customerInfo.classSting,
      listOfDays: getDates(firstday, lastday).map((d: Date) => ({
        day: d.toLocaleDateString('hr'),
        weekday: d.getDay(),
        listOfOffers: customer.location.offers
          .filter(
            (o) =>
              new Date(o.offerdFrom).toLocaleDateString() <= new Date(d).toLocaleDateString() &&
              new Date(o.offerdTo).toLocaleDateString() >= new Date(d).toLocaleDateString(),
          )
          .map((x) => ({
            offerId: x.id,
            orderableUntil: x.orderableUntil,
            listOfDishes: x.offerDetail
              .filter((obd) => new Date(obd.offeredDate).toLocaleDateString() === new Date(d).toLocaleDateString()) // mapiranje offerDate na dane u tjednu
              .map((od: any) => ({
                dishId: od.dish[0].id,
                dishNameHR: od.dish[0].nameHr,
                dishDescriptionHR: od.dish[0].desHr,
                dishNameENG: od.dish[0].nameEng,
                dishDescriptionENG: od.dish[0].desEng,
                listOfCustomerRelevantAllergens: od.dish[0].dishAllergens.map((da: any) => ({
                  allergenDescriptionHR: da.allergen.desHr,
                  allergenDescriptionENG: da.allergen.desEng,
                })),
                price: od.priceList.noramtivPrice || -1,
                priceListId: od.priceList.id,
              })),
          })),
      })),
    };
  }

  public static toDTOs(customers: Customer[]): CustomerOfferDTO[] {
    return customers.map((a) => this.toDTO(a));
  }
}
