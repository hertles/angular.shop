import {Injectable} from '@angular/core';
import {UserService} from "../user/user.service";
import {ChosenProduct} from "../../models/product";
import {ProductService} from "../product/product.service";
import {combineLatest, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
  useFactory: (userService: UserService, productService: ProductService) => {
    const user = userService.getCurrentUser()
    return {
      ...productService,
      getProducts(): Observable<ChosenProduct[]> {
        return combineLatest([
          productService.getProducts(),
          user,
        ]).pipe(
          map(([products, user]) => {
            return products.map(product => ({
              ...product,
              chosen: user?.preferences.has(product.id)
            }));
          })
        );
      },
      getProduct(id: number): Observable<ChosenProduct> {
        return combineLatest([
          productService.getProduct(id),
          user,
        ]).pipe(
          map(([product, user]) => ({
            ...product,
            chosen: user?.preferences.has(product.id)
          }))
        );
      }
    }
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
