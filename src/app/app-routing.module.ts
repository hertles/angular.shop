import {Router, RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {DistancePageComponent} from "./pages/distance-page/distance-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {TodolistPageComponent} from "./pages/todolist-page/todolist-page.component";
import {inject, NgModule} from "@angular/core";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {UserService} from "./services/user/user.service";
import {map} from "rxjs";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

export const appRoutes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "products"},
  {path: "products", component: MainPageComponent, title: "Товары"},
  {
    path: "profile",
    component: ProfilePageComponent,
    title: "Мой профиль",
    canActivate: [() => {
      const userService = inject(UserService)
      const router = inject(Router)
      return userService.getCurrentUser().pipe(
        map(user => {
          if (user) {
            return true
          } else {
            return router.createUrlTree(['/login'])
          }
        })
      )
    }]
  },
  {path: "products/:id", component: ProductPageComponent, title: "Страница товара"},
  {path: "distance", component: DistancePageComponent, title: "Калькулятор расстояний"},
  {path: "todos", component: TodolistPageComponent, title: "TodoList API"},
  {path: "login", component: LoginPageComponent, title: "Авторизация"},
  {path: "**", component: ErrorPageComponent, title: "Ошибка"},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
