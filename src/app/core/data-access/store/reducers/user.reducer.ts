import { createReducer, on } from '@ngrx/store';
import actions from '../actions/user.actions';

export interface UserState {
  id?: string;
  username?: string;
  email?: string;
  name?: string;
  address?: string;
}

const initialState: UserState = {
  id: undefined,
  username: undefined,
  email: undefined,
  name: undefined,
  address: undefined,
};

export const UserReducer = createReducer(
  initialState,
  on(actions.read, (_, props) => structuredClone(props)),
  on(actions.update, (state, props) => ({
    ...state,
    ...structuredClone(props),
  })),
  on(actions.clear, () => structuredClone(initialState))
);
