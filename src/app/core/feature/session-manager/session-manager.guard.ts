import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { SessionManagerService } from './session-manager.service';

@Injectable()
export class SessionManagerGuard implements CanActivateChild {
  constructor(private sessionManagerService: SessionManagerService) {
    this.sessionManagerService.sessionSetup$
      .pipe(take(1))
      .subscribe(() => (this.isLoaded = true));
  }

  isLoaded = true;

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.isLoaded;
  }
}
