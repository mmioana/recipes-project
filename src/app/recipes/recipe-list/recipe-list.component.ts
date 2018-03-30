import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Recipe} from "../../model/Recipe";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private router: Router,
              private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe(
      (recipes) => {
        this.recipes = recipes;
      }
    );
  }

  onShowDetails(recipe: Recipe) {
    this.router.navigate(['recipes', recipe.id]);
  }

  onDelete(recipe: Recipe) {

  }

}
