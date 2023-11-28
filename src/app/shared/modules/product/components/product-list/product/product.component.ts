import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  KeyValueDiffers,
  Output,
} from '@angular/core';
import {ChosenProduct} from "@models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements DoCheck {
  @Input() product: ChosenProduct
  private differ = this.differs.find({}).create();
  @Output() choose: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private differs: KeyValueDiffers,
    private cdr: ChangeDetectorRef
  ) {
  }

  chooseProduct(event: Event) {
    event.stopPropagation()
    this.choose.emit(!this.product.chosen)
  }

  ngDoCheck() {
    // @ts-ignore
    const changes = this.differ.diff(this.product);
    if (changes) {
      changes.forEachItem(item => {
        if (
          item.key === "chosen"
          && item.currentValue !== item.previousValue
          && item.previousValue !== null
        ) {
          const message = item.currentValue
            ? `You have chosen product ${this.product.id}`
            : `You have canceled your choose of product ${this.product.id}`
          console.log(message)
        }
      })
      this.cdr.markForCheck();
    }
  }
}
