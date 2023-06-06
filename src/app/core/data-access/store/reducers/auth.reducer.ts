import { createReducer, on } from '@ngrx/store';
import actions from '../actions/auth.actions';

export interface AuthState {
  id: string | null | undefined;
  token: string | null | undefined;
  isAuth?: boolean;
}

const initialState: AuthState = {
  id: undefined,
  token: undefined,
  isAuth: undefined,
};

export const AuthReducer = createReducer(
  initialState,
  on(actions.signIn, (state, props) => ({
    ...state,
    isAuth: true,
    id: props.id,
    token: props.access_token,
  })),
  on(actions.signOff, (state, props) => ({
    ...state,
    isAuth: initialState.isAuth,
    id: initialState.id,
    token: initialState.token,
  })),
  on(actions.initialize, (state, props) => ({
    ...state,
    isAuth: !!props.auth,
    id: props.auth?.id,
    token: props.auth?.access_token,
  }))
);
