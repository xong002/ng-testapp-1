import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService, private router: Router) { }

  selectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
    const index = this.recipeService.getRecipes().findIndex((recipe) => {
      return this.recipe == recipe;
    });
    this.router.navigate(['/recipes/', index]);
  }
}
