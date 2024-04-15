import { Component, Input, Output } from '@angular/core';
import { TaskModel } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent{
  @Input() submit!: boolean;  
  @Output() title!: string;
  modalVisible: boolean = false;
  items = ['Item 1', 'Item 2', 'Item 3'];
  tasks: TaskModel[] = [
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
  ];


  addItem(): void {
    this.items.push(`Item ${this.items.length}`);
  }

  
 
  removeItem(): void {
    this.items = this.items.slice(0, this.items.length - 1);
  }
}
