import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/data-access/api/api.service';

import { Observable, map, take, tap } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/data-access/store/reducers';

import { UserData } from 'src/app/shared/interfaces/user-data.interface';
import UserActions from 'src/app/core/data-access/store/actions/user.actions';
import { UpdateUserRequest } from '../interfaces/update-user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private api: ApiService, private store: Store<AppState>) {}

  update(id: string, updateUserRequest: UpdateUserRequest): Observable<void> {
    return this.api
      .put<UserData>(`/users/${id}`, updateUserRequest, {
        auth: true,
      })
      .pipe(
        take(1),
        tap((response) => {
          this.store.dispatch(UserActions.update(response));
        }),
        map(() => {})
      );
  }
}
