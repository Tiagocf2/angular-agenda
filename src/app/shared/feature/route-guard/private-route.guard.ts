import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/core/data-access/store/reducers';

@Injectable()
class PrivateRouteGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store
      .select((state) => state.auth.isAuth)
      .pipe(
        map((isAuth) => {
          const canActivate = isAuth === true;
          if (canActivate) return true;
          this.router.navigate(['/auth/login']);
          return false;
        })
      );
  }
}
