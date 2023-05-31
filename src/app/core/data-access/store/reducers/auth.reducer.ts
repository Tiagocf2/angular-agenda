import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/auth.actions';

interface AuthState {
  id: string | null | undefined;
  token: string | null | undefined;
  isAuth: boolean;
}

const initialState: AuthState = {
  id: undefined,
  token: undefined,
  isAuth: false,
};

const authReducer = createReducer(
  initialState,
  on(actions.signIn, (state, props) => ({
    ...state,
    isAuth: true,
    id: props.id,
    token: props.token,
  }))
);

export default authReducer;
