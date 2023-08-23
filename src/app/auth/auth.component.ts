import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
// 
export class AuthComponent {
  constructor(
    //private loginService : LoginService,
    private formBuilder: FormBuilder,
  ) {}

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  repassFormControl = new FormControl('', [Validators.required]);
  hide = true;

  loginForm = this.formBuilder.group({
    email : this.emailFormControl,
    password: this.passwordFormControl,

  });

  signupForm = this.formBuilder.group({
    name : this.nameFormControl,
    phone : this.phoneFormControl,
    // email : this.emailFormControl,
    repass : this.repassFormControl,
    // password: this.passwordFormControl,

  });


  onSubmit(): void {
    console.log(this.loginForm.value);
    
  }


}






