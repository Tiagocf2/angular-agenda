import { createReducer, on } from '@ngrx/store';
import actions from '../actions/auth.actions';

export interface AuthState {
  id: string | null | undefined;
  token: string | null | undefined;
  isAuth: boolean;
}

const initialState: AuthState = {
  id: undefined,
  token: undefined,
  isAuth: false,
};

export const AuthReducer = createReducer(
  initialState,
  on(actions.signIn, (state, props) => ({
    ...state,
    isAuth: true,
    id: props.id,
    token: props.access_token,
  }))
);
