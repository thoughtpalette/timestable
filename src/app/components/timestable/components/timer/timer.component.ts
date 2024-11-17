import { Component } from '@angular/core';
import { TimerCountPipe } from '../../../../pipes/timer-count.pipe';

@Component({
  selector: 'timer',
  standalone: true,
  imports: [TimerCountPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  timer?: ReturnType<typeof setInterval>
  time = 0
  stopped = false

  start() {
    this.timer = setInterval(() => {
      this.time++
    }, 1000)
  }

  stop() {
    this.stopped = true
    clearInterval(this.timer)
  }

  reset() {
    this.time = 0
    this.stopped = false
  }
}
