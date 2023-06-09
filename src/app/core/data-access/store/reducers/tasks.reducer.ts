import { createReducer, on } from '@ngrx/store';
import actions from '../actions/tasks.actions';
import { TaskData } from 'src/app/shared/data-access/tasks/tasks.interface';

export interface TasksState {
  list: TaskData[];
  stats: object;
}

const initialState: TasksState = {
  list: [],
  stats: {},
};

export const TasksReducer = createReducer(
  initialState,
  on(actions.list, (state, props) => ({
    ...state,
    list: props.docs,
  })),
  on(actions.create, (state, props) => {
    const list = Array.from(state.list);
    list.push(props);
    return { ...state, list };
  }),
  on(actions.update, (state, props) => {
    const list = Array.from(state.list);
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id === props._id) {
        list[i] = { ...list[i], ...props };
        break;
      }
    }
    return { ...state, list };
  }),
  on(actions.remove, (state, props) => {
    const list = Array.from(state.list);
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id === props._id) {
        list.splice(i, 1);
        break;
      }
    }

    return { ...state, list };
  }),
  on(actions.stats, (state, props) => ({
    ...state,
    stats: props,
  }))
);
