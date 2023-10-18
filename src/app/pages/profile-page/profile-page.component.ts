import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {map, Observable, tap} from "rxjs";
import {User} from "../../models/user";
import {ChosenProduct} from "../../models/product";
import {ChosenProductService} from "../../services/chosen-product/chosen-product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  public products$: Observable<ChosenProduct[]>
  public user$: Observable<User | undefined>
  public productsLoading: boolean = true
  public productsError: Error | null = null
  constructor(private userService: UserService,
              private productService: ChosenProductService,
              private router: Router) {
  }
  ngOnInit() {
    this.user$ = this.userService.getCurrentUser()
    this.products$ = this.productService.getProducts().pipe(
      tap({
        next: () => {
          this.productsLoading = false
        },
        error: (error) => {
          this.productsError = error
        }
      }),
      map(products=>products.filter(product=>product.chosen === true))
    )
  }
  public logout() {
    this.userService.logout()
    this.router.navigate(['/login'])
  }
}
