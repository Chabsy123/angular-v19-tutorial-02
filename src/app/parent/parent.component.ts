import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Sibling1Component } from '../sibling1/sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, Sibling1Component, Sibling2Component, ReusableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit{

  // Data sent from Parent -> Child (used in [childInputProperty])
  parentProperty: string = " This is the Parent Component Data";

  // Data received from Child -> Parent (used in {{receiveMessage}})
  receiveMessage: string = "";

  // Used for sibling-to-sibling communication via parent
  sibling1Data: any = "";
  sibling2Data: any = "";

  // Using @ViewChild to directly access ReusableComponent
  @ViewChild('reusable') reusableComp!: ReusableComponent;

  // Lifecycle hook runs AFTER view (template) is loaded
  ngAfterViewInit(): void {
    // Here parent directly changes child's property using @ViewChild
    this.reusableComp.childProperty = "Reusable : This is the new Parent component.";
  };

  // Called when child emits data (Child -> Parent)
  receiveData(data: any) {
   this.receiveMessage = data;
  };

  // Called when Sibling1 emits data -> stored and sent to Sibling2
  receiveEvent1(data: any) {
   this.sibling1Data = data;
   console.log(this.sibling1Data);
  };

  // Called when Sibling2 emits data -> stored and sent to Sibling1
  receiveEvent2(data: any) {
   this.sibling2Data = data;
   console.log(this.sibling2Data);
  };
}
