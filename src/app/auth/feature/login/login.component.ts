import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../data-access/auth.service';
import { EMPTY, catchError, delay, take } from 'rxjs';
import { MessagesService } from 'src/app/messages/messages.service';
import { errorParser } from 'src/app/shared/utils/helpers';
import { MessageType } from 'src/app/messages/enums/message-type.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../styles/auth-styles.scss'],
})
export class LoginComponent {
  formulario!: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  handleSubmit() {
    if (!this.formulario.valid) return;
    this.loading = true;

    const values = this.formulario.value;

    this.authService
      .signin(
        {
          username: values.username,
          password: values.password,
        },
        values.rememberMe
      )
      .pipe(
        take(1),
        catchError((error) => {
          console.error(error);
          this.loading = false;
          this.messagesService.showMessage({
            text: errorParser(error),
            type: MessageType.ERROR,
          });
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }

  passwordVisible: boolean = false;
  changePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
