import { Component, Input } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'table-row',
  standalone: true,
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
  imports: [AnswerComponent]
})
export class TableRowComponent {
  @Input() isHeader: boolean = false
  @Input() yAxisLabel: number = 0
  @Input() options: number[] = []

}
