import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navIsVisible: boolean = false
  public toggleNavVisibility() {
    this.navIsVisible = !this.navIsVisible
  }
}
