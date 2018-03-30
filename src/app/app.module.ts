import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientDetailComponent } from './ingredient-list/ingredient-detail/ingredient-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-list/recipe-detail/recipe-detail.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import {RoutingModule} from "./routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RecipesComponent } from './recipes/recipes.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {RecipesService} from './services/recipes.service';
import {AuthGuard} from './services/auth-guard.service';
import {ShoppingService} from "./services/shopping.service";
import {ForOf} from "./directives/for-of.directive";


@NgModule({
  declarations: [
    AppComponent,
    IngredientListComponent,
    IngredientDetailComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RegisterComponent,
    SignInComponent,
    NotFoundComponent,
    HeaderComponent,
    RecipesComponent,
    ForOf
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    RecipesService,
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
