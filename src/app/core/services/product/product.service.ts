import {Injectable} from '@angular/core';
import {ProductModel} from "@models/product.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('https://fakestoreapi.com/products')
  }
  getProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`https://fakestoreapi.com/products/${id}`)
  }
}
