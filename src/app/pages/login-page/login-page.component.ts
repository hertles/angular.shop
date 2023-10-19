import {Component} from '@angular/core';
import {UserService} from "../../core/services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public error: string
  public login: string
  public password: string

  constructor(private userService: UserService, private router: Router) {
  }

  public authorize(event: Event) {
    event.preventDefault()
    if (this.userService.login(this.login, this.password)) {
      this.router.navigate(['/profile'])
    } else {
      this.error = 'Неправильный логин или пароль'
    }
  }
}
