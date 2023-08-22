import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  selectedIngredients = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] =[
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 2),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(i : Ingredient){
    this.ingredients.push(i);
    this.selectedIngredients.next(this.ingredients.slice());
  }
}
