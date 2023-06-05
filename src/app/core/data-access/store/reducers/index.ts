import { AuthReducer, AuthState } from './auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const Reducers = {
  auth: AuthReducer,
};
