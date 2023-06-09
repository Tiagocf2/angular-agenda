import { Component, Input } from '@angular/core';
import {
  TaskPriority,
  TaskPriorityMap,
  TaskStatus,
  TaskStatusMap,
} from 'src/app/shared/data-access/tasks/task.enum';
import { TaskData } from 'src/app/shared/data-access/tasks/tasks.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input({ required: true }) task!: TaskData;
  @Input() onChange?: (task: TaskData) => void;
  @Input() onStatusChange?: (task: TaskData) => void;
  @Input() onRemove?: (task: TaskData) => void;

  get formattedDate(): string {
    return new Date(this.task.dueDate).toLocaleDateString();
  }

  get hasPriorityBadge() {
    return this.task.priority === TaskPriority.HIGH;
  }

  get taskPriority() {
    return TaskPriorityMap[this.task.priority];
  }

  get taskStatus() {
    return TaskStatusMap[this.task.status];
  }

  get priorityBadge() {
    let color;
    switch (this.task.priority) {
      case TaskPriority.HIGH:
        color = 'danger';
        break;
      case TaskPriority.MEDIUM:
        color = 'warn';
        break;
      case TaskPriority.LOW:
        color = 'info';
        break;
    }
    return 'badge ' + 'badge--' + color;
  }

  get statusBadge() {
    let color;
    switch (this.task.status) {
      case TaskStatus.DONE:
        color = 'success';
        break;
      case TaskStatus.INCOMPLETE:
        color = 'info';
        break;
      case TaskStatus.LATE:
        color = 'danger';
        break;
      case TaskStatus.INACTIVE:
        color = 'dark';
        break;
    }
    return 'badge ' + 'badge--' + color;
  }

  get isDone() {
    return this.task.status === TaskStatus.DONE;
  }

  textPriorityBadge = TaskPriorityMap[TaskPriority.HIGH];

  handleChange(event: any) {
    const newtask = structuredClone(this.task);
    if (event.checked) {
      newtask.status = TaskStatus.DONE;
    } else {
      newtask.status = TaskStatus.INCOMPLETE;
    }
    this.task = newtask;
    this.onStatusChange && this.onStatusChange(structuredClone(newtask));
  }

  handleEdit() {
    this.onChange && this.onChange(structuredClone(this.task));
  }

  handleRemove() {
    this.onRemove && this.onRemove(structuredClone(this.task));
  }
}
