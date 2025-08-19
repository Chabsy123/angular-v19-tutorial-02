import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngswitch-vs-switch',
  imports: [ CommonModule],
  templateUrl: './structural-directive-ngswitch-vs-switch.component.html',
  styleUrl: './structural-directive-ngswitch-vs-switch.component.scss'
})
export class StructuralDirectiveNgswitchVsSwitchComponent {
  //Current grade value (0 by default)
  grade: number = 0;

  // Method to update the grade value
  set(x: number) {
    this.grade = x; // Updates the grade which triggers the switch statements
  }
}
