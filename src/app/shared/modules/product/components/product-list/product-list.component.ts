import {Component, Input, TrackByFunction} from '@angular/core';
import {ChosenProduct} from "@models/product.model";
import {UserService} from "@services/user/user.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() public products: ChosenProduct[] | null
  @Input() public productsError: Error | null = null
  @Input() public productsLoading: boolean = true

  constructor(private userService: UserService) {
  }

  public chooseProduct(id: number) {
    this.userService.togglePreference(id)
  }
  public trackByProducts: TrackByFunction<ChosenProduct> = (_, item) => item.title
}
