import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom.pipe';
import { PurePipe } from '../pure.pipe';
import { ImpurePipe } from '../impure.pipe';


@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule,CustomPipe, PurePipe, ImpurePipe],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {
  mobileNumber: any = 939393;
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
