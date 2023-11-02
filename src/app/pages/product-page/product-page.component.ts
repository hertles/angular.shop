import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChosenProduct} from "@models/product";
import {Observable, Subscription, tap} from "rxjs";
import {ChosenProductService} from "@services/chosen-product/chosen-product.service";
import {UserService} from "@services/user/user.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  private id: number
  public loading = true
  public product$: Observable<ChosenProduct>
  public subscription: Subscription
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ChosenProductService,
    private userService: UserService,
  ) {
  }
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params=>{
      this.id = Number(params["id"])
      this.product$ = this.productService.getProduct(this.id).pipe(
        tap(()=>{
          this.loading = false
        })
      )
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  public toggleChoose() {
    this.userService.togglePreference(this.id)
  }
}
