import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timer?: ReturnType<typeof setInterval>
  _time = new BehaviorSubject(0)
  _stopped = new BehaviorSubject(false)

  stopped$ = this._stopped.asObservable()
  time$ = this._time.asObservable()

  get currentTime() {
    return this._time.getValue()
  }

  constructor() { }

  start() {
    this.timer = setInterval(() => {
      this._time.next(this.currentTime + 1)
    }, 1000)
  }

  stop() {
    this._stopped.next(true)
    clearInterval(this.timer)
  }

  reset() {
    this._time.next(0)
    this._stopped.next(false)
  }

}
