import { Component } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { ResetService } from '../../../../services/reset.service';

@Component({
  selector: 'actions',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {

  constructor(private resetSvc: ResetService) {}

  resetAnswers() {
    this.resetSvc.resetProblems()
  }
}
