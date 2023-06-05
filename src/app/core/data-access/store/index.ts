import { Store, StoreModule } from '@ngrx/store';
import { Reducers, AppState } from './reducers';

const config = {};

export type AppStore = Store<AppState>;

export const StoreModuleWithConfig = StoreModule.forRoot(Reducers, config);
