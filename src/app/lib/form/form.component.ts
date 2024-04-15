import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() isOpen!: boolean; 
  @Output() isOpenChange = new EventEmitter<boolean>();
  title: string = '';
  description: string = '';
  
  constructor(private tasks: TaskService) { }

  onSubmit(): void {        
    this.tasks.setTask(this.title, this.description);
    this.title = '';
    this.description = '';
    console.log(this.tasks);    
  } 

  onClose(): void {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }

}
