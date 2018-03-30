import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../model/Recipe";
import {ActivatedRoute} from "@angular/router";
import {RecipesService} from "../../../services/recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  private recipeId: string;

  constructor(private activeRoute: ActivatedRoute,
              private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipeId = this.activeRoute.snapshot.params['id'];
    this.recipesService.getRecipeBy( this.recipeId )
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
    this.activeRoute.params.subscribe((params) => {
      this.recipeId = params['id'];
      this.recipesService.getRecipeBy( this.recipeId )
        .subscribe((recipe) => {
          this.recipe = recipe;
        });
    })
    console.log(this.recipeId);
  }

}
