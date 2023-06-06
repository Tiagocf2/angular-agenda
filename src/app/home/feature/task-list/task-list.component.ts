import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, skipWhile, take } from 'rxjs';
import { AppState } from 'src/app/core/data-access/store/reducers';
import { TaskData } from 'src/app/shared/data-access/tasks/tasks.interface';
import { TasksService } from 'src/app/shared/data-access/tasks/tasks.service';
import { NewTaskDialogComponent } from '../new-task-dialog/new-task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss', '../../styles/home.defaults.scss'],
})
export class TaskListComponent {
  tasks$!: Observable<TaskData[]>;
  userId?: string;

  constructor(
    private dialog: MatDialog,
    private tasksService: TasksService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.tasks$ = this.store.select((state) => state.tasks.list);
    this.store
      .select((state) => state.user.id)
      .pipe(
        skipWhile((id) => id == null),
        take(1)
      )
      .subscribe((userId) => {
        this.userId = userId;
        userId && this.tasksService.list(userId!, {}).subscribe();
      });
  }

  handleChange(task: TaskData) {
    const dialogRef = this.dialog.open(NewTaskDialogComponent, { data: task });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.tasksService
        .update(this.userId!, { ...task, ...result })
        .subscribe();
    });
  }

  handleStatusChange(task: TaskData) {
    this.tasksService.update(this.userId!, task).subscribe();
  }

  handleRemove(task: TaskData) {
    this.tasksService.remove(this.userId!, task._id).subscribe();
  }
}
