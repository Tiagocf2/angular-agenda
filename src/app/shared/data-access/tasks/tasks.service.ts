import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/core/data-access/api/api.service';
import { AppState } from 'src/app/core/data-access/store/reducers';
import {
  CreateTaskRequest,
  ListTaskFilters,
  TaskData,
  TaskStatsResponse,
  UpdateTaskRequest,
} from './tasks.interface';
import { EMPTY, Observable, catchError, map, take, tap } from 'rxjs';
import TasksActions from 'src/app/core/data-access/store/actions/tasks.actions';
import { MessagesService } from 'src/app/messages/messages.service';
import { MessageType } from 'src/app/messages/enums/message-type.enum';
import { errorParser } from '../../utils/helpers';

@Injectable()
export class TasksService {
  constructor(
    private api: ApiService,
    private store: Store<AppState>,
    private message: MessagesService
  ) {}

  create(userId: string, payload: CreateTaskRequest): Observable<void> {
    return this.api
      .post<TaskData>(
        `/users/${userId}/tasks`,
        { ...payload, user: userId },
        { auth: true }
      )
      .pipe(
        take(1),
        catchError((error) => {
          this.message.showMessage({
            text: errorParser(error),
            type: MessageType.ERROR,
          });
          return EMPTY;
        }),
        tap((result) => {
          this.message.showMessage({
            text: 'Nova tarefa criada',
            type: MessageType.SUCCESS,
          });
          this.store.dispatch(TasksActions.create(result));
        }),
        map(() => {})
      );
  }

  update(userId: string, payload: UpdateTaskRequest): Observable<void> {
    console.log(payload);
    return this.api
      .put<TaskData>(`/users/${userId}/tasks/${payload._id}`, payload, {
        auth: true,
      })
      .pipe(
        take(1),
        tap((result) => {
          this.message.showMessage({
            text: 'Tarefa atualizada',
            type: MessageType.SUCCESS,
          });
          this.store.dispatch(TasksActions.update(result));
        }),
        map(() => {})
      );
  }

  list(userId: string, filters: ListTaskFilters): Observable<void> {
    return this.api
      .get<TaskData[]>(`/users/${userId}/tasks/`, filters, {
        auth: true,
      })
      .pipe(
        take(1),
        tap((result) => {
          this.store.dispatch(TasksActions.list({ docs: result }));
        }),
        map(() => {})
      );
  }

  getStats(userId: string): Observable<void> {
    return this.api
      .get<TaskStatsResponse>(
        `/users/${userId}/tasks/stats`,
        {},
        {
          auth: true,
        }
      )
      .pipe(
        take(1),
        tap((result) => {
          this.store.dispatch(TasksActions.stats(result));
        }),
        map(() => {})
      );
  }

  remove(userId: string, taskId: string): Observable<void> {
    return this.api
      .delete<TaskData[]>(`/users/${userId}/tasks/${taskId}`, {
        auth: true,
      })
      .pipe(
        take(1),
        tap((_) => {
          this.message.showMessage({
            text: 'Tarefa removida',
            type: MessageType.SUCCESS,
          });
          this.store.dispatch(TasksActions.remove({ _id: taskId }));
        }),
        map(() => {})
      );
  }
}
