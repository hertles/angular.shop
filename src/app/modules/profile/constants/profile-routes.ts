import {Router, Routes} from "@angular/router";
import {ProfileComponent} from "@modules/profile/pages/profile.component";
import {LoginComponent} from "@modules/profile/pages/login/login.component";
import {inject} from "@angular/core";
import {UserService} from "@services/user/user.service";
import {map} from "rxjs";

export const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [() => {
      const userService = inject(UserService)
      const router = inject(Router)
      return userService.getCurrentUser().pipe(
        map(user => {
          if (user) {
            return true
          } else {
            return router.createUrlTree(['profile','login'])
          }
        })
      )
    }],
  },
  {path: 'login', component: LoginComponent}
]
