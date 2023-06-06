import { createAction, props } from '@ngrx/store';

interface AuthUserProps {
  access_token: string;
  id: string;
}

interface InitializeProps {
  auth?: AuthUserProps;
}

const signIn = createAction('Auth | SignIn', props<AuthUserProps>());

const signUp = createAction('Auth | SignUp', props<AuthUserProps>());

const signOff = createAction('Auth | SignOff');

const initialize = createAction('Auth | Initialize', props<InitializeProps>());

const AuthActions = { signIn, signUp, signOff, initialize };

export default AuthActions;
