

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-list/recipe-detail/recipe-detail.component";
import {IngredientListComponent} from "./ingredient-list/ingredient-list.component";
import {IngredientDetailComponent} from "./ingredient-list/ingredient-detail/ingredient-detail.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {AuthGuard} from "./services/auth-guard.service";


const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard],
    children: [{
      path: ':id', component: RecipeDetailComponent
    }]},
  {path: 'ingredients', component: IngredientListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {

}
