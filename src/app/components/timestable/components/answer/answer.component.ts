import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResetService } from '../../../../services/reset.service';

@Component({
  selector: 'answer',
  standalone: true,
  imports: [],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss'
})
export class AnswerComponent implements OnInit, OnDestroy {
  @Input() base = 0
  @Input() option = 0
  answer = 0
  revealed = false
  reset$: Subscription | undefined

  constructor(private resetSvc: ResetService) {
    this.reset$ = this.resetSvc.reset$.subscribe(() => {
      this.revealed = false;
    })
  }

  revealAnswer() {
    this.revealed = true
  }

  ngOnInit() {
    this.answer = this.base * this.option
  }

  ngOnDestroy() {
    if (this.reset$) {
      this.reset$.unsubscribe()
    }
  }
}
