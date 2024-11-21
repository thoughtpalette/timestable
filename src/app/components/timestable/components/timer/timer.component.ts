import { Component } from '@angular/core';
import { TimerCountPipe } from '../../../../pipes/timer-count.pipe';
import { TimerService } from '../../../../services/timer.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'timer',
  standalone: true,
  imports: [TimerCountPipe, AsyncPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  time$: Observable<number>
  stopped$: Observable<boolean>

  constructor(private timerSvc: TimerService) {
    this.time$ = this.timerSvc.time$
    this.stopped$ = this.timerSvc.stopped$
  }

  start() {
    this.timerSvc.start()
  }

  stop() {
    this.timerSvc.stop()
  }

  reset() {
    this.timerSvc.reset()
  }
}
