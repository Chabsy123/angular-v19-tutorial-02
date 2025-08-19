import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {
    angularPipes : string = "Angular pipes are used to transform data in Angular templates.";

 personData = {
  name: "John",
  age: 30,
  // address: {
  //   city: "New York",
  //   state: "NY"
  // }
 }

currentDate : Date = new Date();

items = of(['Apple', 'Banana', 'Orange', 'Mango']);


}
