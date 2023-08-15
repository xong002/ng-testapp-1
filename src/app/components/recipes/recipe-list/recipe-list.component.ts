import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Test recipe", "This is a test description 1", "https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d"),
    new Recipe("Test recipe", "This is a test description 2", "https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d")

  ];

  @Output() showRecipeEvent = new EventEmitter<Recipe>();

  showRecipe(event: Recipe){
    this.showRecipeEvent.emit(event);
  }

}
