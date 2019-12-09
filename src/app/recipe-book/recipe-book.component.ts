import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-book.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.less']
})
export class RecipeBookComponent implements OnInit {
  recipeDetails: Recipe;
  constructor() { }

  ngOnInit() {

  }

  getRecipeDetails(recipe: Recipe) {
    this.recipeDetails = recipe;
  }
}
