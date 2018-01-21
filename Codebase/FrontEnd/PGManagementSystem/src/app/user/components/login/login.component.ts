import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from '../../../share/service/authentication.service';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  accessUrl: string;
  user: User;
  loginForm: FormGroup;

  constructor(
    @Inject(AuthenticationService) private auth: AuthenticationService,
    @Inject(LoginService) private login: LoginService,
    @Inject(Router) private router: Router,
    @Inject(FormBuilder) private formBuilder: FormBuilder
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.createForm();
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      usernameField: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      passwordField: new FormControl(
        '',
        Validators.compose([Validators.required])
      )
    });
  }

  onLogin() {
    let userFound = false;
    this.login.getUsers().subscribe(elem => {
      elem.forEach(eachObj => {
        if (!userFound) {
          if (
            this.user.username === eachObj.username &&
            this.user.password === eachObj.password
          ) {
            userFound = true;
            console.log('logged in successfully');
            localStorage.setItem('loggedIn', 'true');
            this.router.navigate(['/dashboard']);
          }

        }
      })
    });
  }
}

