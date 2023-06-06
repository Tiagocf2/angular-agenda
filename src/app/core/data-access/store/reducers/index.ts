import { AuthReducer, AuthState } from './auth.reducer';
import { UserReducer, UserState } from './user.reducer';

export interface AppState {
  auth: AuthState;
  user: UserState;
}

export const Reducers = {
  auth: AuthReducer,
  user: UserReducer,
};
