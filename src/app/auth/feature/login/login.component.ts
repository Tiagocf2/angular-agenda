import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../styles/auth-styles.scss'],
})
export class LoginComponent {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      login: [null, [Validators.required, Validators.minLength(6)]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  handleSubmit() {
    if (!this.formulario.valid) return;
    this.router.navigate(['home']);
  }

  passwordVisible: boolean = false;
  changePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
