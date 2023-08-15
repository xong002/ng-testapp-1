import { Component, Input, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe! : Recipe;

  ngOnChanges(change :SimpleChanges){
    // console.log(this.recipe);
  }
}
