import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() public navIsVisible = false

  public setNavIsVisible() {
    this.navIsVisible = !this.navIsVisible
  }
}
