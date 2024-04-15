import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  Tasks: Object[] = [
    {
      title: 'Task 1',
      description: 'Description 1'
    },
    {
      title: 'Task 2',
      description: 'Description 2'
    },
    {
      title: 'Task 3',
      description: 'Description 3'
    }
  ]

  constructor() { }

  getTasks() {
    return this.Tasks
  }
  

  setTask(title: string, description: string) {
    this.Tasks = [...this.Tasks, { title, description }]
  }
}
