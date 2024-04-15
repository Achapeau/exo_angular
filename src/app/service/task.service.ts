import { Injectable } from '@angular/core';
import { TasksModule } from '../model/tasks/tasks.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<TasksModule[]>([]);

  constructor() { }

  get tasks$() {
    return this.tasksSubject.asObservable();  
  }
  
  get tasks(): TasksModule[] {
    return this.tasksSubject.value;
  }

  setTask(title: string, description: string) {
  const task = {
    id: this.tasksSubject.value.length + 1,
    title,
    description
  };

  this.tasksSubject.next([...this.tasksSubject.value, task]);
  }

  deleteTask(task: TasksModule) {
    this.tasksSubject.next(
      this.tasksSubject.value.filter((t) => t.id !== task.id)
    );
  }
  
}
