import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {ChosenProduct} from "@models/product";
import {ChosenProductService} from "@services/chosen-product/chosen-product.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
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
          this.productsError = error
        }
      })
    )
  }
}
