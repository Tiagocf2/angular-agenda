import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/data-access/api/api.service';
import { SignInRequest } from '../interfaces/signin-request.interface';
import { Observable, map, tap } from 'rxjs';
import { SessionService } from 'src/app/core/data-access/session/session.service';
import { SignInResponse } from '../interfaces/signin-response.interface';
import SessionType from 'src/app/core/data-access/session/session-type.enum';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/data-access/store/reducers';
import AuthActions from 'src/app/core/data-access/store/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private api: ApiService,
    private sessionService: SessionService,
    private store: Store<AppState>
  ) {}

  signin(
    signinRequest: SignInRequest,
    keepSession: boolean
  ): Observable<boolean> {
    return this.api.post<SignInResponse>('/auth/signin', signinRequest).pipe(
      tap((response) => {
        const sessionType =
          keepSession === true ? SessionType.LOCAL : SessionType.SESSION;
        this.sessionService.create(response, sessionType);
        this.store.dispatch(AuthActions.signIn(response));
      }),
      map(() => true)
    );
  }
}
