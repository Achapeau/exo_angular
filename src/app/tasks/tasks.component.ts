import { Component, Input, OnInit, Output } from "@angular/core";
import { TaskService } from "../service/task.service";
import { TasksModule } from "../model/tasks/tasks.module";

@Component({
  providers: [TaskService],
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  @Output() title!: string;
  modalVisible: boolean = false;
  tasks: TasksModule[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: TasksModule) {
    this.taskService.deleteTask(task);
  }
}
