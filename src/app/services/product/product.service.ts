import {Injectable} from '@angular/core';
import {Product} from "../../core/modules/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products')
  }
}
