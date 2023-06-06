import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/data-access/auth.service';
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
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user$ = this.store
      .select((state) => state.user)
      .pipe(map((state) => <UserData>state));
  }

  navigate() {
    this.router.navigate(['/home/perfil']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
