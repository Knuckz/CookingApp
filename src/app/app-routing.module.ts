import { AuthComponent } from './auth/auth.component';
import { RecipesResolverService } from './recipe-book/recipes-resolver.service';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/recipe-book', pathMatch: 'full'
  },
  {
    path: 'shopping-list', component: ShoppingListComponent
  },
  {
    path: 'recipe-book', component: RecipeBookComponent, children: [
      { path: '', component: RecipeStartComponent},
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
    ]
  },
  { path: 'auth', component: AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
