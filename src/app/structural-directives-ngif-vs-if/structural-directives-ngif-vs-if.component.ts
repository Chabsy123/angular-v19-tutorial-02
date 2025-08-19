import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives-ngif-vs-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives-ngif-vs-if.component.html',
  styleUrl: './structural-directives-ngif-vs-if.component.scss'
})
export class StructuralDirectivesNgifVsIfComponent {

  isChecked : boolean = false;
  isInputBox: boolean = true;
  input1: string = '';
  input2: string = '';

  onClick() {
    // when the checked variable is true it will set to false and when false, it will set to true,usually to show a button when a checkbox is clicked
    this.isChecked = !this.isChecked;
  }

  showField() {
    // shows a textbox when clicked
   this.isInputBox = true;
}

  hideField() {
    // hides a textbox when clicked
    this.isInputBox = false;
  }
  }
