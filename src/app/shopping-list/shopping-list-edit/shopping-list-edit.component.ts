import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.less']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy{
  @ViewChild("f", {static: false}) slForm: NgForm;
  subscription: Subscription;
  isEditing: boolean;
  editedItemIndex: number;
  editedItem: Ingredient;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe( (index : number) => {
        this.isEditing = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
    })
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (this.isEditing) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.isEditing = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.isEditing = false;
  }

  onDelete() {
    this.slForm.reset();
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }

  ngOnDestroy() {

  }

}
