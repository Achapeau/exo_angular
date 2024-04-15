import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from 'src/app/tasks/task.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() submit: EventEmitter<TaskModel> = new EventEmitter();
  @Input() isOpen!: boolean; 
  @Output() isOpenChange = new EventEmitter<boolean>();
  title: string = '';
  description: string = '';


  onSubmit(): void {        
    this.submit.emit({ title: this.title, description: this.description });
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }
 

}
