import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe-book.model'
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService) {}

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'simply', 
        'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2560,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg', 
        [ 
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20) 
        ]),
        new Recipe('A Test Recipe 2', 
            'simply 2', 
            'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2560,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 2)
        ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(recipeId: number) {
        return this.recipes[recipeId];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe : Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index : number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
}