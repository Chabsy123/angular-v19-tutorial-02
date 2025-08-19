import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  // disables change detection
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {
  // Traditional variable (requires change detection if changed outside Angular's zone)
normalCounter = 0;

// Signal (reactive primitive) initialized with default value 0, can also be used with objects and arrays signal([])
counter = signal(0);

constructor() {
    // Set signal value imperatively (equivalent to this.counter.set(5))
    this.counter.set(5);

    // Example of async signal update
    // setTimeout(() => {
    //   this.normalCounter = 50;       // Traditional - may need manual CD
    //   this.counter.set(30);         // Signal - auto-triggers template update
    //   console.log("counter Value => " + this.counter());
    // }, 5000);

    // Effect runs whenever counter signal changes
    effect(() => {
        console.log("The value of counter is : " + this.counter());
    });
}

// Increment using signal's update() (immutable approach)
onIncrement() {
    this.counter.update(initialValue => initialValue + 1);
}
}
