import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {ChosenProduct} from "@models/product";
import {ChosenProductService} from "@services/chosen-product/chosen-product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  public products$: Observable<ChosenProduct[]>
  public productsError: Error | null = null
  public productsLoading = true

  constructor(private productService: ChosenProductService) {
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts().pipe(
      tap({
        next: () => {
          this.productsLoading = false
        },
        error: (error) => {
          this.productsLoading = false
          this.productsError = error
        }
      })
    )
  }
}
