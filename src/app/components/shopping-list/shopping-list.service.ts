import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  selectedIngredients = new EventEmitter<Ingredient[]>();

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
    this.selectedIngredients.emit(this.ingredients.slice());
  }
}
