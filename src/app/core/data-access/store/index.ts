import { StoreModule } from '@ngrx/store';
import reducers from './reducers';

const config = {};

export const StoreModuleWithConfig = StoreModule.forRoot(reducers, config);
