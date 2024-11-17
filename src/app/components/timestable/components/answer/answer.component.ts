import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'answer',
  standalone: true,
  imports: [],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss'
})
export class AnswerComponent implements OnInit {
  @Input() base = 0
  @Input() option = 0
  answer = 0
  revealed = false

  revealAnswer() {
    this.revealed = true
  }

  ngOnInit() {
    this.answer = this.base * this.option
  }
}
