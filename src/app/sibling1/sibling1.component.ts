import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  imports: [],
  templateUrl: './sibling1.component.html',
  styleUrl: './sibling1.component.scss'
})
export class Sibling1Component {

  // Sends data to parent (Sibling1 -> Parent)
  @Output() sibling1Event = new EventEmitter<any>();

  // Receives data from parent (which came from Sibling2)
  @Input() sibling1Property : string = "";

  // Called when button is clicked
  onSubmit(data : any){
    // Send entered data to parent
    this.sibling1Event.emit(data);
  }
}
