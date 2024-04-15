import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() title! : string;
  @Input() loading : boolean = false;
  @Output() click : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){    
    this.click.emit(42);
    this.loading = !this.loading;
  }

  onHover(): void {
    console.log("Clique sur le bouton")
}
}
