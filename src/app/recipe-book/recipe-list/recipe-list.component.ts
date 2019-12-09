import { Subscription } from 'rxjs';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe-book.model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes: Recipe[];
  sub : Subscription;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    this.sub = this.recipeService.recipesChanged
      .subscribe( (recipes : Recipe[]) => {
        this.recipes = recipes;
      })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onNewRecipeClicked() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
