import { Component, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
  @Input() submit!: boolean;  
  @Output() title!: string;
  modalVisible: boolean = false;
  items = ['Item 1', 'Item 2', 'Item 3'];
  tasks!: Object[]

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    tasks = this.taskService.getTasks()
  }

  addItem(): void {
    this.items.push(`Item ${this.items.length}`);
  }

  
 
  removeItem(): void {
    this.items = this.items.slice(0, this.items.length - 1);
  }
}
