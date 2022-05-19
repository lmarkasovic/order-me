import { Service, ServiceBroker } from 'moleculer';
import 'reflect-metadata';
import CreateAllergen from './Application/Action/Allergen/CreateAllergen';
import DeleteAllergen from './Application/Action/Allergen/DeleteAllergen';
import GetAllergen from './Application/Action/Allergen/GetAllergen';
import GetAllergens from './Application/Action/Allergen/GetAllergens';
import UpdateAllergen from './Application/Action/Allergen/UpdateAllergen';
import CreateTag from './Application/Action/Tag/CreateTag';
import DeleteTag from './Application/Action/Tag/DeleteTag';
import GetTag from './Application/Action/Tag/GetTag';
import GetTags from './Application/Action/Tag/GetTags';
import UpdateTag from './Application/Action/Tag/UpdateTag';
import GetDishes from './Application/Action/Dish/GetDishes';
import DeleteDish from './Application/Action/Dish/DeleteDish';
import GetDish from './Application/Action/Dish/GetDish';
import UpdateDishType from './Application/Action/DishTypes/UpdateDishType';
import DeleteDishType from './Application/Action/DishTypes/DeleteDishType';
import GetDishTypes from './Application/Action/DishTypes/GetDishTypes';
import CreateDishType from './Application/Action/DishTypes/CreateDishType';
import GetDishType from './Application/Action/DishTypes/GetDishType';

export default class DishService extends Service {
  public constructor(public broker: ServiceBroker) {
    super(broker);
    this.parseServiceSchema({
      name: 'dishes',
      settings: {},
      events: {},
      actions: {
        // Dish actions
        deleteDish: DeleteDish,
        getDish: GetDish,
        getDishes: GetDishes,
        // Dish Types actions
        createDishType: CreateDishType,
        deleteDishType: DeleteDishType,
        getDishType: GetDishType,
        getDishTypes: GetDishTypes,
        updateDishType: UpdateDishType,
        // Allergen actions
        createAllergen: CreateAllergen,
        deleteAllergen: DeleteAllergen,
        getAllergen: GetAllergen,
        getAllergens: GetAllergens,
        updateAllergen: UpdateAllergen,
        // Tag actions
        createTag: CreateTag,
        deleteTag: DeleteTag,
        getTag: GetTag,
        getTags: GetTags,
        updateTag: UpdateTag,
      },
      methods: {},
    });
  }
}
