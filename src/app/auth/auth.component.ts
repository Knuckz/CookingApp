import { Router } from '@angular/router';
import { AuthService, AuthResponseData } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { onErrorResumeNext, Observable } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{
    isLoginMode: boolean = true;
    loginForm: FormGroup;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router) {}
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

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;

        if (this.isLoginMode) {
            authObs = this.authService.login(email,password)
        } else {
            authObs = this.authService.signup(email, password)
        }

        authObs.subscribe(resData => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/recipe-book']);
        },
        errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        })


        this.loginForm.reset();
    }

    onHandleError() {
        this.error = null;
    }
}