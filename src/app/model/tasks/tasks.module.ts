import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TasksModule {
  id!: number;
  title!: string;
  description!: string;
 }
