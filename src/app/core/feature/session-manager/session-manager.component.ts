import { Component } from '@angular/core';
import { SessionManagerService } from './session-manager.service';
import { AppState } from '../../data-access/store/reducers';
import { Store } from '@ngrx/store';
import { skipWhile, take } from 'rxjs';

@Component({
  selector: 'app-session-manager',
  templateUrl: './session-manager.component.html',
  styleUrls: ['./session-manager.component.scss'],
})
export class SessionManagerComponent {
  constructor(private sessionManagerService: SessionManagerService) {
    this.figureOutSession();
  }

  isLoading = true;

  figureOutSession() {
    this.sessionManagerService.sessionSetup$
      .pipe(take(1)) //
      .subscribe(() => {
        this.isLoading = false;
      });
    this.sessionManagerService.init();
  }
}
