import { Component, Input} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe : Recipe;

  constructor(private recipeService : RecipeService, private slService : ShoppingListService){}

  ngOnInit(){
  }

  addToShoppingList(){
    this.recipe.ingredients.forEach(
      (i : Ingredient) => {
        this.slService.addIngredients(i);
      }
    )
  }

  
}
