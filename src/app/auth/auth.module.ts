import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [AuthComponent],
    imports: [
        ReactiveFormsModule, 
        SharedModule,
        RouterModule.forChild([{path: '', component: AuthComponent}])
    ]
})
export class AuthModule {

}