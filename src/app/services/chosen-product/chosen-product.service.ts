import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {ChosenProduct} from "../../core/modules/product";
import {ProductService} from "../product/product.service";

@Injectable({
  providedIn: 'root',
  useFactory: (userService: UserService, productService: ProductService) => {
    if (userService.getCurrentUser()) {
      return {
        ...productService,
        getProducts(): ChosenProduct[] {
          const preferences = userService.getMyPreferences()
          const products = productService.getProducts()
          return products.map(product => ({
            ...product,
            chosen: preferences.has(product.id)
          }))
        }
      }
    }

    return new ProductService
  },
  deps: [UserService, ProductService]
})
export class ChosenProductService extends ProductService{
  constructor() {
    super()
  }
}
