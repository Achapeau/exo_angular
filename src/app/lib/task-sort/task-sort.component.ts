import { Component } from '@angular/core';
import { TasksModule } from 'src/app/model/tasks/tasks.module';
import { TaskService } from 'src/app/service/task.service';
import { TaskEnum } from 'src/app/task-enum';



@Component({
  selector: 'app-task-sort',
  templateUrl: './task-sort.component.html',
  styleUrls: ['./task-sort.component.scss']
})
export class TaskSortComponent{
  itemObjectsLeft: TasksModule[] = [];
  itemObjectsMiddle: TasksModule[] = [];
  itemObjectsRight: TasksModule[] = [];

  constructor(private tasks: TaskService) { 
    this.tasks.tasks$.subscribe((tasks) => {
      this.itemObjectsLeft = tasks.filter((task) => task.status === TaskEnum.TO_DO);
      this.itemObjectsMiddle = tasks.filter((task) => task.status === TaskEnum.IN_PROGRESS);
      this.itemObjectsRight = tasks.filter((task) => task.status === TaskEnum.DONE);
      console.log(this);
    })
  }

  onViewTask() {
    console.log(this.tasks.tasks$.forEach((task) => console.log(task)));
  }
    
}
