import { DropdownDirective } from './dropdown.directive';
import { AlertComponent } from './alert/alert.component';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective,
        CommonModule
    ]
})
export class SharedModule {

}