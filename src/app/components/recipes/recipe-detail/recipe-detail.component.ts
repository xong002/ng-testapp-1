import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  // @Input() recipe : Recipe;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private slService: ShoppingListService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    // this.recipe = this.recipeService.getRecipes().at(this.route.snapshot.params['id']);
    // this.recipeService.recipeSelected.subscribe(
    //   (r : Recipe) => {
    //     this.recipe = r;
    //   }
    // )
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )

  }

  addToShoppingList() {
    this.recipe.ingredients.forEach(
      (i: Ingredient) => {
        this.slService.addIngredients(i);
      }
    )
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
