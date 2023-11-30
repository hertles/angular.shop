import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChosenProduct} from "@models/product.model";
import {Observable, Subscription, tap} from "rxjs";
import {ChosenProductService} from "@services/chosen-product/chosen-product.service";
import {UserService} from "@services/user/user.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public loading = true
  public product$: Observable<ChosenProduct>
  public subscription: Subscription
  private id: number
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
