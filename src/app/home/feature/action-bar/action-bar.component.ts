import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskDialogComponent } from '../new-task-dialog/new-task-dialog.component';
import { TasksService } from 'src/app/shared/data-access/tasks/tasks.service';
import { AppState } from 'src/app/core/data-access/store/reducers';
import { Store } from '@ngrx/store';
import { Observable, skipWhile, take } from 'rxjs';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss', '../../styles/home.defaults.scss'],
})
export class ActionBarComponent {
  constructor(
    private dialog: MatDialog,
    private tasksService: TasksService,
    private store: Store<AppState>
  ) {}

  userId$!: Observable<string | undefined>;

  ngOnInit() {
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
      this.userId$.subscribe((uid) => {
        this.tasksService.create(uid!, result).subscribe();
      });
    });
  }
}
