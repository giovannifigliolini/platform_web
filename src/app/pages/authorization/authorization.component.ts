import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Token, User } from '../../core/models/user.model';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {

  // private authService = Inject(AuthService);

  formLogin !: FormGroup;
  formSignup !: FormGroup;

  constructor(private authService: AuthService) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })

    this.formSignup = new FormGroup({
      emailSignup: new FormControl('', [Validators.required, Validators.email]),
      passwordSignup: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  login() {

    this.authService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe((elem) => console.log(elem))

  }

  signup() {

    this.authService.signup(this.formSignup.value.emailSignup, this.formSignup.value.passwordSignup).subscribe((elem) => console.log(elem));

  }

}
