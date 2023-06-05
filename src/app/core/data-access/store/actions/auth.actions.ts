import { createAction, props } from '@ngrx/store';

interface AuthUserProps {
  access_token: string;
  id: string;
}
const signIn = createAction('Auth | SignIn', props<AuthUserProps>());

const signUp = createAction('Auth | SignUn', props<AuthUserProps>());

const signOff = createAction('Auth | SignOff');

const AuthActions = { signIn, signUp, signOff };

export default AuthActions;
