interface Allergen {
  allergenDescriptionHR: string;
  allergenDescriptionENG: string;
}

type allergens = Allergen[];

interface Dish {
  dishId: number;
  dishNameHR: string;
  dishDescriptionHR: string;
  dishNameENG: string;
  dishDescriptionENG: string;
  listOfCustomerRelevantAllergens: allergens;
  price: number;
  priceListId: number;
}

type dishes = Dish[];

interface Offer {
  offerId: number;
  orderableUntil: Date;
  listOfDishes: dishes;
}

type offers = Offer[];

interface Day {
  day: string;
  weekday: number;
  listOfOffers: offers;
}

type days = Day[];

export default interface CustomerOfferDTO {
  id: number;
  name: string;
  class: string;
  listOfDays: days;
}
