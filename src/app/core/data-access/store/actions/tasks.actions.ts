import { createAction, props } from '@ngrx/store';
import {
  TaskData,
  TaskStatsResponse,
} from 'src/app/shared/data-access/tasks/tasks.interface';

const list = createAction('Task | List', props<{ docs: TaskData[] }>());
const update = createAction('Task | Update', props<TaskData>());
const create = createAction('Task | Create', props<TaskData>());
const remove = createAction('Task | Remove', props<{ _id: string }>());
const stats = createAction('Task | Stats', props<TaskStatsResponse>());

const TasksActions = { list, update, create, remove, stats };

export default TasksActions;
