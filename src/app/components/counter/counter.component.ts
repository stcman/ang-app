import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  countValue = signal(0);

  increment () {
    this.countValue.set(this.countValue() + 1); // OR this.countValue.update(val => val + 1);
  }
  
  decrement () {
    this.countValue.set(this.countValue() - 1); // OR this.countValue.update(val => val - 1);
  }

  reset () {
    this.countValue.set(0);
  }
}
