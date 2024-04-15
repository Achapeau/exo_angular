
import { TaskEnum } from 'src/app/task-enum';
import { TodoTask } from 'src/app/interface/todo-task.interface';
import { DoneTask } from 'src/app/interface/done-task.interface';
import { OnProgressTask } from 'src/app/interface/onProgress-task.interface';

export class TasksModule {
  id!: number;
  title!: string;
  description!: string;
  status!: TaskEnum;
  taskDetails?: TodoTask | DoneTask | OnProgressTask;

  constructor(id: number, title: string, description: string, status: TaskEnum, taskDetails?: TodoTask | DoneTask | OnProgressTask) {}
 }
