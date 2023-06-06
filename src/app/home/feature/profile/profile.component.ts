import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/core/data-access/store/reducers';
import { UserState } from 'src/app/core/data-access/store/reducers/user.reducer';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../../styles/home.defaults.scss'],
})
export class ProfileComponent {
  user$!: Observable<UserData>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.user$ = this.store
      .select((state) => state.user)
      .pipe(map((state) => <UserData>state));
  }
}
