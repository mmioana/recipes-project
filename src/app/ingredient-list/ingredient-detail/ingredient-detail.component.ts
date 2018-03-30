import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../model/Ingredient";

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css']
})
export class IngredientDetailComponent implements OnInit {

  @Input() addedIngredients: Ingredient[];

  constructor() { }

  ngOnInit() {
  }

}
