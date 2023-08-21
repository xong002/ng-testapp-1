import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[];

  constructor(private shoppingListService : ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.selectedIngredients.subscribe(
      (ingredientList : Ingredient[]) => {
        this.ingredients = ingredientList.slice();
      }
    )
  }

}
