import {AuthService} from "./auth.service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Recipe} from "../model/Recipe";

@Injectable()
export class RecipesService {
  constructor(private httpClient: HttpClient,
              private authService: AuthService) {}

  getRecipes(){
    const token = this.authService.getToken();
    return this.httpClient.get<any>('https://recipes-proj.firebaseio.com/recipes.json?auth=' + token)
      .map((response) => {
        const recipeChunk = [];
        for(const key in response) {
          const recipe = response[key].recipe;
          recipe.id = key;
          recipeChunk.push(recipe);
        }
        //Object.values(response).forEach((wrapper) => recipeChunk.push(wrapper.recipe));
        return recipeChunk;
      });
  }

  getRecipeBy(id: string) {
    const token = this.authService.getToken();
    return this.httpClient.get<Recipe>('https://recipes-proj.firebaseio.com/recipes.json?auth=' + token)
      .map((response) => {
        for(const key in response) {
          if(key === id) {
            return response[key].recipe;
          }
        }
      });
  }

  add(recipe: Recipe) {
    const token = this.authService.getToken();
    return this.httpClient.post('https://recipes-proj.firebaseio.com/recipes.json?auth=' + token, {
      recipe
    });
  }
}
