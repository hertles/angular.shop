import {Injectable} from '@angular/core';
import {UserService} from "../user/user.service";
import {ChosenProduct} from "../../models/product";
import {ProductService} from "../product/product.service";
import {combineLatest, map, Observable, of, switchMap} from "rxjs";
import {User} from "../../models/user";

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
            switchMap<[ChosenProduct[],User]>(([products, user]) => {
              return of(products.map(product => ({
                ...product,
                chosen: user?.preferences.has(product.id)
              })));
            })
          );
        },
        getProduct(id: number): Observable<ChosenProduct> {
          return combineLatest([
            productService.getProduct(id),
            userService.getCurrentUser(),
          ]).pipe(
            map(([product, user]) => ({
              ...product,
              chosen: user?.preferences.has(product.id)
            })));
        }
      }
    }

    return productService
  },
  deps: [UserService, ProductService]
})
export class ChosenProductService extends ProductService {
  override getProducts(): Observable<ChosenProduct[]> {
    return super.getProducts();
  }

  override getProduct(id: number): Observable<ChosenProduct> {
    return super.getProduct(id);
  }
}
