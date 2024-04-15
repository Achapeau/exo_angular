import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ComponentComponent } from './lib/component/component.component';
import { ButtonComponent } from './lib/button/button.component';
import { ModalComponent } from './lib/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { SortableComponent } from './lib/sortable/sortable.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { FormComponent } from './lib/form/form.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TaskSortComponent } from './lib/task-sort/task-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ComponentComponent,
    ButtonComponent,
    ModalComponent,
    SortableComponent,
    TasksComponent,
    FormComponent,
    TaskSortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SortableModule.forRoot(),
    FormsModule,
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
