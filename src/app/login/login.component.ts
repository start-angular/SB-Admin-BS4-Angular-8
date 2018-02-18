import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import { NgForm } from '@angular/forms';

import { LoginDTO } from './login-dto';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    private credentials: LoginDTO;

    constructor (private login: LoginService, public router: Router) {}

    ngOnInit() {

        this.credentials = new LoginDTO({
            username: '',
            password: '',
            rememberMe: false
        });
    }

    onLoggedin() {
        // localStorage.setItem('isLoggedin', 'true');
    }

    doLogin(value): void {
        this.credentials = value.form.value;
        if ( this.login.check(this.credentials) ) {
            sessionStorage.setItem('user', JSON.stringify( { username: this.credentials.username } ));
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigateByUrl('/dashboard');
        } else {
            console.log('User not found!');
        }
    }

}
