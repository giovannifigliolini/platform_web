import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {

  formLogin !: FormGroup;
  formSignup !: FormGroup;

  constructor(){
    this.formLogin = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)])
    })
    
    this.formSignup = new FormGroup({
      fullName : new FormControl('', [Validators.required, Validators.minLength(3)]),
      emailSignup : new FormControl('', [Validators.required, Validators.email]),
      passwordSignup : new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  login(){

    console.log(this.formLogin)

  }

  signup(){
    console.log(this.formSignup.value)
  }

}
