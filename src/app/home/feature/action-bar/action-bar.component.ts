import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskDialogComponent } from '../new-task-dialog/new-task-dialog.component';
import { TasksService } from 'src/app/shared/data-access/tasks/tasks.service';
import { AppState } from 'src/app/core/data-access/store/reducers';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';

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

  userId?: string;

  ngOnInit() {
    this.store
      .select((state) => state.user.id)
      .pipe(take(1))
      .subscribe((r) => (this.userId = r));
  }

  newTask() {
    const dialogRef = this.dialog.open(NewTaskDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (!this.userId) {
        console.error("You're logged off 😠");
      }
      this.tasksService.create(this.userId!, result);
    });
  }
}
