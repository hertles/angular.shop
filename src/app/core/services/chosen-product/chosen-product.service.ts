import {Injectable} from '@angular/core';
import {UserService} from "../user/user.service";
import {ChosenProduct} from "@models/product.model";
import {ProductService} from "../product/product.service";
import {combineLatest, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ChosenProductService extends ProductService {
  constructor(private userService: UserService, http: HttpClient) {
    super(http)
  }
  override getProducts(): Observable<ChosenProduct[]> {
    const user = this.userService.getCurrentUser()
    return combineLatest([
      super.getProducts(),
      user,
    ]).pipe(
      map(([products, user]) => products.map(product => ({
          ...product,
          chosen: user?.preferences.has(product.id)
        }))
      )
    );
  }

  override getProduct(id: number): Observable<ChosenProduct> {
    const user = this.userService.getCurrentUser()
    return combineLatest([
      super.getProduct(id),
      user,
    ]).pipe(
      map(([product, user]) => ({
        ...product,
        chosen: user?.preferences.has(product.id)
      }))
    );
  }
}
