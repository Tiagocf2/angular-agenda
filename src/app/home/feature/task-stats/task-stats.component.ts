import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, skipWhile, take } from 'rxjs';
import { AppState } from 'src/app/core/data-access/store/reducers';
import { TasksService } from 'src/app/shared/data-access/tasks/tasks.service';

@Component({
  selector: 'app-task-stats',
  templateUrl: './task-stats.component.html',
  styleUrls: ['./task-stats.component.scss', '../../styles/home.defaults.scss'],
})
export class TaskStatsComponent {
  isLoading = true;
  constructor(
    private taskService: TasksService,
    private store: Store<AppState>
  ) {}

  stats$!: Observable<any>;
  userId?: string;

  ngOnInit() {
    this.stats$ = this.store.select((state) => state.tasks.stats);
    this.store
      .select((state) => state.user.id)
      .pipe(
        skipWhile((id) => id == null),
        take(1)
      )
      .subscribe((userId) => {
        this.userId = userId;
        userId && this.taskService.getStats(userId).subscribe();
      });
  }
}
