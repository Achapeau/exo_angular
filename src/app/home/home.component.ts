import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  modalVisible: boolean = false;

  counter!: number;
  intervalId?: number;

  constructor() { }
  ngOnInit(): void {
    console.log("toi tu dis oui à tout 'dixit Nico'"); 
    
  }


  ngOnDestroy(): void {
    console.log("Comment ça mon reuf?");
    clearInterval(this.intervalId);
  }

  clickButton(): void {
    console.log("t'es dans :");
    
  }

}
