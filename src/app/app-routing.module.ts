import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

export const appRoutes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "products"
  },
  {
    path: "products",
    title: "Товары",
    loadChildren: () => import('@modules/product/products.module').then(m => m.ProductsModule)
  },
  {
    path: "profile",
    title: "Мой профиль",
    loadChildren: () => import('@modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "distance",
    title: "Калькулятор расстояний",
    loadChildren: () => import('@modules/distance/distance.module').then(m => m.DistanceModule)
  },
  {
    path: "todos",
    title: "TodoList API",
    loadChildren: () => import('@modules/todolist/todolist.module').then(m => m.TodolistModule)
  },
  {
    path: "constants",
    title: "Собачий приют",
    loadChildren: () => import('@modules/dogs/dogs.module').then(m => m.DogsModule)
  },
  {
    path: "**",
    title: "Ошибка",
    loadChildren: () => import('@modules/error/error.module').then(m => m.ErrorModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
