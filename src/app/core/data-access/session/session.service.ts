import { Injectable } from '@angular/core';
import SessionType from './session-type.enum';
import { SessionData } from './session-data.interface';
import { SESSION_KEY } from './session.constants';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private sessionType!: SessionType;
  get storage(): Storage {
    return this.sessionType === SessionType.LOCAL
      ? localStorage
      : sessionStorage;
  }

  create(payload: SessionData, type: SessionType) {
    this.destroy();
    this.sessionType = type;
    this.storage.setItem(SESSION_KEY, JSON.stringify(payload));
  }

  destroy() {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
  }

  retrieve(): SessionData {
    const session = this.storage.getItem(SESSION_KEY);
    if (!session) throw new Error('Session não configurada');
    return JSON.parse(session);
  }
}
