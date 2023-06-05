import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EMPTY, catchError, take, Observable, delay } from 'rxjs';
import { AuthService } from '../../data-access/auth.service';
import { MessagesService } from 'src/app/messages/messages.service';
import { MessageType } from 'src/app/messages/enums/message-type.enum';
import { CepService } from 'src/app/shared/data-access/cep/cep.service';
import { ICep } from 'src/app/shared/data-access/cep/cep.interface';
import { CustomValidators } from 'src/app/shared/utils/form-validators';
import { errorParser, formatCepToAdress } from 'src/app/shared/utils/helpers';
import { SignUpRequest } from '../../interfaces/signup-request.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../../styles/auth-styles.scss'],
})
export class SignupComponent {
  formulario!: FormGroup;
  loading = false;
  fetchingCep = false;

  get cepValid(): boolean {
    return !(<FormControl>this.formulario.get('cep')).hasError('invalidCep');
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messagesService: MessagesService,
    private cepService: CepService
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      firstname: [null, [Validators.required, Validators.minLength(3)]],
      lastname: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      address: [null],
      cep: [null, [CustomValidators.cep]],
      username: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      repeat_password: [
        null,
        [Validators.required, CustomValidators.equalsTo('password')],
      ],
    });
  }

  handleSubmit() {
    if (!this.formulario.valid) return;
    this.loading = true;

    const values = this.formulario.value;
    const payload: SignUpRequest = {
      name: values.firstname + ' ' + values.lastname,
      username: values.username,
      password: values.password,
      address: values.address,
      email: values.email,
    };

    this.authService
      .signup(payload)
      .pipe(
        take(1),
        catchError((error) => {
          console.error(error);
          this.loading = false;
          this.messagesService.showMessage({
            text: errorParser(error),
          });
          return EMPTY;
        })
      )
      .subscribe(this.postSignupAuthentication.bind(this, payload));
  }

  private postSignupAuthentication(payload: SignUpRequest) {
    this.authService
      .signin(
        {
          username: payload.username,
          password: payload.password,
        },
        false
      )
      .pipe(
        take(1),
        catchError((error) => {
          console.error(error);
          this.loading = false;
          this.router.navigate(['/']);
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }

  searchCep() {
    const cepField = <FormControl>this.formulario.get('cep');
    const cep = this.formulario.value.cep;

    cepField.disable();
    this.fetchingCep = true;
    this.cepService
      .search(cep)
      .pipe(
        catchError((error) => {
          console.error(error);
          this.messagesService.showMessage({
            text: 'CEP inválido',
            type: MessageType.ERROR,
          });
          this.fetchingCep = false;
          cepField.enable();
          return EMPTY;
        })
      )
      .subscribe((value) => {
        this.formulario.get('address')?.setValue(formatCepToAdress(value));
        this.fetchingCep = false;
        cepField.enable();
      });
  }
}
