import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  modalVisible: boolean = false;

  counter!: number;
  intervalId?: number;

  constructor() { }

  clickButton(): void {
    console.log("t'es dans :");
    
  }

}
