import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(private submit: TaskService) { }
  @Input() isOpen!: boolean; 
  @Output() isOpenChange = new EventEmitter<boolean>();
  title: string = '';
  description: string = '';


  onSubmit(): void {        
    this.submit.setTask(this.title, this.description);
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }
 

}
