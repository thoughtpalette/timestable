import { Component } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { ResetService } from '../../../../services/reset.service';
import { TimerService } from '../../../../services/timer.service';

@Component({
  selector: 'actions',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {

  constructor(private resetSvc: ResetService, private timerSvc: TimerService) {}

  resetAnswers() {
    this.timerSvc.stop()
    this.timerSvc.reset()
    this.resetSvc.resetProblems()
  }
}
