import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecipeService } from './recipe-book/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentTwoComponent } from './Assignments/assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignments/assignment-three/assignment-three.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    LoadingSpinnerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
