import {Component, OnDestroy, OnInit, TrackByFunction} from '@angular/core';
import {ChosenProduct} from "./core/modules/product";
import {DistanceUnit} from "./core/modules/distance";
import {ChosenProductService} from "./services/chosen-product/chosen-product.service";
import {UserService} from "./services/user/user.service";
import {User} from "./core/modules/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private interval: ReturnType<typeof setInterval>
  public inputs = ["", ""]
  public output = ""
  public date: Date = new Date()
  public distanceUnitsArray: DistanceUnit[] = Object.values(DistanceUnit)
  public fromValue: number = 0
  public fromUnit: DistanceUnit = DistanceUnit.Meters
  public toUnit: DistanceUnit = DistanceUnit.Miles
  public products$: Observable<ChosenProduct[]>
  public currentUser$: Observable<User | undefined>

  constructor(private productService: ChosenProductService, private userService: UserService) {
  }
  chooseProduct(id: number) {
    this.userService.togglePreference(id)
    //this.products = this.productService.getProducts()
  }

  fetchedTodos = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => json)

  ngOnInit() {
    this.products$ = this.productService.getProducts()
    this.currentUser$ = this.userService.getCurrentUser()
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
