export interface TaskData {
  _id: string;
  title: string;
  description?: string;
  dueDate: Date;
  tags: Set<string>;
  priority: number;
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
  tags?: Set<string>;
  priority?: number;
}
