import {Component} from '@angular/core';
import {UserService} from "@services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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
