import { createAction, props } from '@ngrx/store';

interface AuthUserProps {
  token: string;
  id: string;
}
export const signIn = createAction('Auth | SignIn', props<AuthUserProps>());

export const signUp = createAction('Auth | SignUn', props<AuthUserProps>());

export const signOff = createAction('Auth | SignOff');
