import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../model/Ingredient";
import {ShoppingService} from "../services/shopping.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('tomato', 0),
    new Ingredient('potato', 0),
    new Ingredient('cucumber', 0)
  ];

  addedIngredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onIncrement(ingredient: Ingredient) {
    ingredient.quantity++;
  }

  onDecrement(ingredient: Ingredient) {
    ingredient.quantity--;
  }

  onAddToShoppingCart() {
    let totalQuantity = 0;
    this.ingredients.forEach((ingredient) => {
      if (ingredient.quantity !== 0) {
        totalQuantity += ingredient.quantity;
        this.addedIngredients.push(ingredient);
      }
    });
    this.shoppingService.generateValue(totalQuantity);
  }
}
