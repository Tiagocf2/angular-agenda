import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EMPTY, Subscription, catchError, take } from 'rxjs';
import { MessagesService } from 'src/app/messages/messages.service';
import { MessageType } from 'src/app/messages/enums/message-type.enum';
import { CepService } from 'src/app/shared/data-access/cep/cep.service';
import { CustomValidators } from 'src/app/shared/utils/form-validators';
import { errorParser, formatCepToAdress } from 'src/app/shared/utils/helpers';
import { UserService } from '../../data-access/user.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/data-access/store/reducers';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: [
    './profile-page.component.scss',
    '../../../auth/styles/auth-styles.scss',
  ],
})
export class ProfilePageComponent {
  formulario!: FormGroup;
  loading = false;
  fetchingCep = false;
  user!: UserData;
  storeSubscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private messagesService: MessagesService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      username: [null, [Validators.minLength(6)]],
      name: [null, [Validators.minLength(3)]],
      email: [null, [Validators.email]],
      address: [null],
    });
    this.storeSubscription = this.store
      .select((state) => state.user)
      .subscribe((v) => {
        console.log(v);
        if (v.id == null) return;
        this.user = {
          id: v.id!,
          email: v.email!,
          name: v.name!,
          username: v.username!,
          address: v.address,
        };
        this.formulario.reset(this.user);
      });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  goBack() {
    window.history.back();
  }

  handleSubmit() {
    if (!this.formulario.valid) return;
    this.loading = true;

    const values = this.formulario.value;
    const payload: any = {};
    if (values.name && values.name !== this.user.name) {
      payload.name = values.name;
    }
    if (values.username && values.username !== this.user.username) {
      payload.username = values.username;
    }
    if (values.address && values.address !== this.user.address) {
      payload.address = values.address;
    }
    if (values.email && values.email !== this.user.email) {
      payload.email = values.email;
    }

    this.userService
      .update(this.user.id, payload)
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
      .subscribe(() => {
        this.loading = false;
        this.messagesService.showMessage({
          text: 'Dados alterados com sucesso!',
          type: MessageType.SUCCESS,
        });
      });
  }
}
