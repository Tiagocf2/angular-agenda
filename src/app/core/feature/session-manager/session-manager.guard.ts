import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanActivateChildFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {
  Observable,
  delay,
  filter,
  map,
  of,
  skipWhile,
  switchMap,
  tap,
} from 'rxjs';
import { AppState } from '../../data-access/store/reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class SessionManagerGuard implements CanActivateChild {
  constructor(private store: Store<AppState>) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const obs = this.store
      .select((state) => {
        return state.auth.isAuth;
      })
      .pipe(
        skipWhile((isAuth) => {
          console.log(isAuth);
          return isAuth == null;
        }),
        // delay(4000),
        map(() => true)
      );
    obs.subscribe();
    return obs;
  }
}

// export const SessionManagerGuard: CanActivateChildFn = () => {
//   return inject(Store<AppState>)
//     .select((state) => state.auth.isAuth)
//     .pipe(
//       skipWhile((isAuth) => isAuth == null),
//       map(() => true),
//       tap(console.log)
//     );
// };
