import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingredient[]=[
    new Ingredient('apples',80),
    new Ingredient('tomato',8)
  ];

  onIngredientAdded(data:Ingredient){
    this.ingredients.push(data)
  }
}
