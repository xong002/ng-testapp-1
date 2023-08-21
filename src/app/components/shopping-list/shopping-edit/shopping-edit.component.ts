import { Component, ElementRef, EventEmitter, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  ingredient! : Ingredient;
  // @Output() selectedIngredient = new EventEmitter<Ingredient>();

  constructor(private slService : ShoppingListService){}

  ngOnInit(){

  }

  addIngredient(){
    this.ingredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    // this.selectedIngredient.emit(this.ingredient);
    this.slService.addIngredients(this.ingredient);
  }
}
