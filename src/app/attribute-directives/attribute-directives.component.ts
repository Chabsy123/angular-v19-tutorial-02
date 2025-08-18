import { Component, NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss'
})
export class AttributeDirectivesComponent {
  // 1
  textColor: string = 'text-succes';

  changeColor(color: string) {
  this.textColor = color;
  }

  // 2
  isTextGreen: boolean = false;

  // 3
  userClass : string = '';
}
