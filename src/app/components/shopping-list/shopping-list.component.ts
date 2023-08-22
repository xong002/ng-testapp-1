import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  sub$: Subscription;

  constructor(private shoppingListService : ShoppingListService){}


  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();
    this.sub$ = this.shoppingListService.selectedIngredients.subscribe(
      (ingredientList : Ingredient[]) => {
        this.ingredients = ingredientList.slice();
      }
    )
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
