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
  textColor: string = 'text-success';

  changeColor(color: string) {
   this.textColor = color;
  }

  styleColor: string = 'text-orange';
  updateColor(ngStyleColor: string) {
    this.styleColor = ngStyleColor;
  }

  // 2
  isTextGreen: boolean = false;
  isTextOrange: boolean = false;

  // 3
  userClass : string = '';

  customClass : any = {
     'color':'yellow',
    'height':'150px',
    'width':'400px',
    'border':'1px solid black'
  }
}
