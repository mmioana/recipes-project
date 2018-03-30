import {Ingredient} from "./Ingredient";

export class Recipe {
  constructor(public id: number,
              public name: string,
              public desc: string,
              public url: string,
              public ingredients: Ingredient[]) {}
}
