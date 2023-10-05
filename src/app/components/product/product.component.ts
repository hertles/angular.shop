import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../core/types";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product
  @Output() choose: EventEmitter<boolean> = new EventEmitter<boolean>()
  chooseProduct() {
    this.choose.emit(!this.product.chosen)
  }
}
