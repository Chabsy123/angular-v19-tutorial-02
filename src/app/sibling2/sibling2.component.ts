import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  imports: [],
  templateUrl: './sibling2.component.html',
  styleUrl: './sibling2.component.scss'
})
export class Sibling2Component {

  // Sends data to parent (Sibling2 -> Parent)
  @Output() Sibling2Event = new EventEmitter<any>();

  // Receives data from parent (which came from Sibling1)
  @Input() sibling2Property : string = "";

  // Called when button is clicked
  onSend(data:any){
    // Send entered data to parent
    this.Sibling2Event.emit(data);
  }
}
