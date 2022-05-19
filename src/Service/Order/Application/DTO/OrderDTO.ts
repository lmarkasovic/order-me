interface Allergen {
  allergenDescriptionHR: string;
  allergenDescriptionENG: string;
}

type allergens = Allergen[];

interface Dish {
  dishId: number;
  price: number;
  dishNameHR: string;
  dishDescriptionHR: string;
  dishNameENG: string;
  dishDescriptionENG: string;
  listOfCustomerRelevantAllergens: allergens;
}

interface OrderDetail {
  status: string;
  orderedDate: string;
  offerId: number;
  canceledDate: string;
  customerInfo: any;
  dish: Dish;
}

type orderDetails = OrderDetail[];

export default interface OrderDTO {
  orderId: number;
  orderedBy: number;
  orderDate: string;
  orderDetails: orderDetails

}
