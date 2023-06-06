import { Injectable } from '@angular/core';
import { SessionService } from '../../data-access/session/session.service';
import { AuthService } from 'src/app/auth/data-access/auth.service';
import { EMPTY, Observable, Subject, catchError, take } from 'rxjs';

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
    private authService: AuthService
  ) {
    this.sessionSetupSubject = new Subject();
  }

  init() {
    try {
      const session = this.sessionService.retrieve();
      this.authService
        .getUserData(session)
        .pipe(take(1))
        .subscribe(() => {
          this.sessionSetupSubject.next();
        });
    } catch {
      this.sessionService.destroy();
      this.sessionSetupSubject.next();
    }
  }
}
