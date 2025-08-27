import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  // @Input allows Parent -> Child data transfer
  @Input() childInputProperty: string = "";

  // @Output allows Child -> Parent communication using EventEmitter
  @Output() childOutputProperty = new EventEmitter<any>();

  // Called when user clicks button in child
  sendData() {
    // Emits message to parent (Child -> Parent)
    this.childOutputProperty.emit("This is the Child Component Data");
  }
}
