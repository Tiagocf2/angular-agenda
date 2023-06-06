import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/core/data-access/store/reducers';
import { UserState } from 'src/app/core/data-access/store/reducers/user.reducer';
import { MessageType } from 'src/app/messages/enums/message-type.enum';
import { MessagesService } from 'src/app/messages/messages.service';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../../styles/home.defaults.scss'],
})
export class ProfileComponent {
  user$!: Observable<UserData>;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.user$ = this.store
      .select((state) => state.user)
      .pipe(map((state) => <UserData>state));
  }

  navigate() {
    console.log('oi');
    this.router.navigate(['/home/perfil']);
  }
}
