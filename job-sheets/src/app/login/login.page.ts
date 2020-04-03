import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { LoginCredentials } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginFormGroup: FormGroup;

  constructor(
    private _router: Router,
    private _loginService: LoginService,
    formBuilder: FormBuilder ){
      this.loginFormGroup = formBuilder.group({
        email: ["", [Validators.required]],
        password: ["", [Validators.required]]

      });
    }
   

  ngOnInit() {
  }

  login(){

    const loginCredentials: LoginCredentials = this.loginFormGroup.value;
    this._loginService.login(loginCredentials).then((authData)=> {
      this._router.navigate(["/tabs"]);
      console.log(authData);
    })
    .catch((authError) => {
      console.log("Auth Error => ", authError);
    })
  }

}
