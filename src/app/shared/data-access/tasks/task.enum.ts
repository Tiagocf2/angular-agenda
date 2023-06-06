export enum TaskStatus {
  INCOMPLETE = 'INCOMPLETE',
  DONE = 'DONE',
  LATE = 'LATE',
  INACTIVE = 'INACTIVE',
}

export const TaskStatusMap = {
  [TaskStatus.INCOMPLETE.toString()]: 'Incompleto',
  [TaskStatus.DONE.toString()]: 'Feito',
  [TaskStatus.LATE.toString()]: 'Atrasado',
  [TaskStatus.INACTIVE.toString()]: 'Inativo',
};

export enum TaskPriority {
  HIGH = 1,
  MEDIUM = 2,
  LOW = 3,
}

export const TaskPriorityMap = {
  [TaskPriority.HIGH.toString()]: 'Urgente',
  [TaskPriority.MEDIUM.toString()]: 'Mediano',
  [TaskPriority.LOW.toString()]: 'Sem Importancia',
};
