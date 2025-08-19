import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss'
})
export class LinkedSignalComponent {
  // Source signal (initialized with value 1)
  quantitySignal = signal(1);

  // Fixed price (could also be a signal if dynamic)
  price = 10;

  // Option 1: Standard computed signal (commented out)
  // total = computed(() => this.quantitySignal() * this.price);

  // Option 2: Custom linkedSignal with shorthand syntax (commented out)
  // total = linkedSignal(() => this.quantitySignal() * this.price);

  // Option 3: Custom linkedSignal with source and computation
  total = linkedSignal({
    source: this.quantitySignal,  // Source signal to watch
    computation: () => this.quantitySignal() * this.price,  // Derivation logic
    // equals: (a: any, b: any) => a === b  // Optional equality check (disabled)
  });

  // Updates quantitySignal to demonstrate reactivity
  calculate() {
    this.quantitySignal.set(10);  // Will trigger recomputation of total()
  }
}
