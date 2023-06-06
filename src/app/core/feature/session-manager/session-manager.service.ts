import { Injectable } from '@angular/core';
import { SessionService } from '../../data-access/session/session.service';
import { AuthService } from 'src/app/auth/data-access/auth.service';
import { EMPTY, Observable, Subject, catchError, take } from 'rxjs';
import AuthActions from '../../data-access/store/actions/auth.actions';
import { AppState } from '../../data-access/store/reducers';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class SessionManagerService {
  private sessionSetupSubject: Subject<void>;
  get sessionSetup$(): Observable<void> {
    return this.sessionSetupSubject.asObservable();
  }
  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
    private store: Store<AppState>
  ) {
    this.sessionSetupSubject = new Subject();
  }

  init() {
    try {
      const session = this.sessionService.retrieve();
      this.authService
        .getUserData(session)
        .pipe(
          take(1),
          catchError(() => {
            this.store.dispatch(AuthActions.initialize({}));
            return EMPTY;
          })
        )
        .subscribe(() => {
          this.store.dispatch(AuthActions.initialize({ auth: session }));
          this.sessionSetupSubject.next();
        });
    } catch {
      this.store.dispatch(AuthActions.initialize({}));
      this.sessionService.destroy();
      this.sessionSetupSubject.next();
    }
  }
}
