import {Component, OnDestroy, OnInit, TrackByFunction} from '@angular/core';
import {ChosenProduct} from "./core/modules/product";
import {DistanceUnit} from "./core/modules/distance";
import {ChosenProductService} from "./services/chosen-product/chosen-product.service";
import {UserService} from "./services/user/user.service";
import {User} from "./core/modules/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'pet';
  inputs = ["", ""]
  output = ""
  interval: ReturnType<typeof setInterval>
  date: Date = new Date()
  distanceUnitsArray: DistanceUnit[] = Object.values(DistanceUnit)
  fromValue: number = 0
  fromUnit: DistanceUnit = DistanceUnit.Meters
  toUnit: DistanceUnit = DistanceUnit.Miles
  products: ChosenProduct[] = []
  currentUser: User | undefined

  constructor(private productService: ChosenProductService, private userService: UserService) {
    this.products = productService.getProducts()
    this.currentUser = userService.getCurrentUser()
  }
  chooseProduct(id: number) {
    this.userService.togglePreference(id)
    this.products = this.productService.getProducts()
  }

  fetchedTodos = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => json)

  ngOnInit() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }

  clearInput = () => {
    this.inputs = ["", ""]
    this.output = ""
  }
  inputTyped = (newInput: string) => {
    if (newInput === "123") {
      this.output = " правильно!!"
    } else {
      this.output = ""
    }
  }
  inputChanged = (event: Event) => {
    if (event.target) {
      const target = event.target as HTMLInputElement
      if (target.value === "123") {
        this.output = " сохранено!!!!"
      }
    }
  }
  trackByInputs: TrackByFunction<string> = (index, _) => index
  trackByProducts: TrackByFunction<ChosenProduct> = (_, item) => item.title

}
