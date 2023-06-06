import { AuthReducer, AuthState } from './auth.reducer';
import { TasksReducer, TasksState } from './tasks.reducer';
import { UserReducer, UserState } from './user.reducer';

export interface AppState {
  auth: AuthState;
  user: UserState;
  tasks: TasksState;
}

export const Reducers = {
  auth: AuthReducer,
  user: UserReducer,
  tasks: TasksReducer,
};
