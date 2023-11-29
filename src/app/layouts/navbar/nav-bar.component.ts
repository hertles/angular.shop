import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() public navIsVisible = false

  @Output() public hideNav: EventEmitter<null> = new EventEmitter<null>()

  public onNavButtonClick() {
    this.hideNav.emit()
  }
}
