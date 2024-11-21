import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  _reset = new Subject<void>()
  reset$ = this._reset.asObservable()

  resetProblems() {
    this._reset.next()
  }
}
