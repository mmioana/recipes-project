import { Component, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RecipesService} from "../services/recipes.service";
import {Recipe} from "../model/Recipe";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onCreate() {
    // this.modalService.open('', { windowClass: 'dark-modal' });
    const recipe = new Recipe(Math.ceil(Math.random() * 10), 'Name', 'Desc',
      'https://www.rd.com/wp-content/uploads/2017/10/12_Citrus_Healthy-Holiday-Food-Gifts-Instead-of-Fruit-Cake_524210419-ch_ch.jpg',
      []);
    this.recipesService.add(recipe).subscribe((response) => {
      console.log(response);
    });
  }
}


