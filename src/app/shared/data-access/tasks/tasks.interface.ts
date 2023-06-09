import { TaskStatus } from './task.enum';

export interface TaskData {
  _id: string;
  title: string;
  description?: string;
  dueDate: Date;
  tags: Set<string>;
  priority: number;
  status: TaskStatus;
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  dueDate: Date;
  tags: Set<string>;
  priority: number;
}

export interface UpdateTaskRequest {
  _id: string;
  title?: string;
  description?: string;
  dueDate?: Date;
  tags?: Set<string>;
  priority?: number;
}

export interface ListTaskFilters {
  search?: string;
  status?: string;
  priority?: number;
}

export interface TaskStatsResponse {
  done: number;
  total: number;
}
