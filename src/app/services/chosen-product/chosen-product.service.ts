import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {ChosenProduct} from "../../core/modules/product";
import {ProductService} from "../product/product.service";
import {combineLatest, Observable, of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root',
  useFactory: (userService: UserService, productService: ProductService) => {
    if (userService.getCurrentUser()) {
      return {
        ...productService,
        getProducts(): Observable<ChosenProduct[]> {
          return combineLatest([
            productService.getProducts(),
            userService.getCurrentUser(),
          ]).pipe(
            switchMap(([products, user]) => {
              return of(products.map(product => ({
                ...product,
                chosen: user?.preferences.has(product.id)
              })));
            })
          );
        }
      }
    }

    return productService
  },
  deps: [UserService, ProductService]
})
export class ChosenProductService extends ProductService{

}
