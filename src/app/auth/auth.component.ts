import { AuthService } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{
    isLoginMode: boolean = true;
    loginForm: FormGroup;

    constructor(private authService: AuthService) {}
    ngOnInit() {
        this.loginForm = new FormGroup({
            'email' : new FormControl('', Validators.required),
            'password' : new FormControl('', [Validators.required, Validators.min(6)])
        })
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit() {
        if (!this.loginForm.valid) {
            return;
        }
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;

        if (this.isLoginMode) {

        } else {
            this.authService.signup(email, password)
            .subscribe(resData => {
                console.log(resData);
            },
            error => {
                console.log(error);
            });
        }


        this.loginForm.reset();
    }
}