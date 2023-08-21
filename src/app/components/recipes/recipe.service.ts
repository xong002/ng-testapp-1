import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test recipe",
      "This is a test description 1",
      "https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d",
      [
        new Ingredient('man', 2),
        new Ingredient('woman', 2)
      ]),
    new Recipe("Test recipe",
      "This is a test description 2",
      "https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d",
      [
        {
          name: 'tomato',
          amount: 10
        },
        {
          name: 'apple',
          amount: 2
        },
      ])

  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
