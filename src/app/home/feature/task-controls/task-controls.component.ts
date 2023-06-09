import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, skipWhile, take } from 'rxjs';
import { AppState } from 'src/app/core/data-access/store/reducers';
import { TasksService } from 'src/app/shared/data-access/tasks/tasks.service';
import { NewTaskDialogComponent } from '../new-task-dialog/new-task-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskPriorityMap } from 'src/app/shared/data-access/tasks/task.enum';

@Component({
  selector: 'app-task-controls',
  templateUrl: './task-controls.component.html',
  styleUrls: [
    './task-controls.component.scss',
    '../../styles/home.defaults.scss',
  ],
})
export class TaskControlsComponent {
  constructor(
    private dialog: MatDialog,
    private tasksService: TasksService,
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}

  priorityList = TaskPriorityMap;
  formulario!: FormGroup;
  userId$!: Observable<string | undefined>;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      search: [null],
      priority: [null],
      status: [null],
    });
    this.userId$ = this.store
      .select((state) => state.user.id)
      .pipe(
        skipWhile((id) => id == null),
        take(1)
      );
  }

  newTask() {
    const dialogRef = this.dialog.open(NewTaskDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.userId$.subscribe((uid) => {
        this.tasksService.create(uid!, result).subscribe();
      });
    });
  }

  handleSubmit() {
    if (!this.formulario.valid) return;
    const values = structuredClone(this.formulario.value);
  }
}
