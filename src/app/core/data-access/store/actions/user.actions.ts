import { createAction, props } from '@ngrx/store';
import { UserData } from 'src/app/shared/interfaces/user-data.interface';

export interface UpdateUserAction {
  username?: string;
  name?: string;
  address?: string;
  email?: string;
}

const read = createAction('User | Read', props<UserData>());
const update = createAction('User | Update', props<UserData>());
const clear = createAction('User | Clear');

const UserActions = { read, update, clear };

export default UserActions;
