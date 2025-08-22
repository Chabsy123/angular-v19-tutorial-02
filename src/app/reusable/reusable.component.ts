import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.scss'
})
export class ReusableComponent {

  @Input() childProperty : string = "Reusable : This is a reusable component.";
}
