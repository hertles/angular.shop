import {Component, OnInit, TrackByFunction} from '@angular/core';
import {Observable, tap} from "rxjs";
import {ChosenProduct} from "../../core/modules/product";
import {ChosenProductService} from "../../services/chosen-product/chosen-product.service";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public products$: Observable<ChosenProduct[]>
  public productsLoading = true

  constructor(private productService: ChosenProductService, public userService: UserService) {
  }
  ngOnInit() {
    this.products$ = this.productService.getProducts().pipe(
      tap(()=>{
        this.productsLoading = false
      })
    )
  }
  public chooseProduct(id: number) {
    this.userService.togglePreference(id)
  }
  public trackByProducts: TrackByFunction<ChosenProduct> = (_, item) => item.title
}
