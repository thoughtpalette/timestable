import { Component } from '@angular/core';
import { TableRowComponent } from "./components/table-row/table-row.component";

@Component({
  selector: 'timestable',
  standalone: true,
  templateUrl: './timestable.component.html',
  styleUrl: './timestable.component.scss',
  imports: [TableRowComponent]
})
export class TimestableComponent {
  options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}
