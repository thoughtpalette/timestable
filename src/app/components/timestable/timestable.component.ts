import { Component } from '@angular/core';
import { TableRowComponent } from "./components/table-row/table-row.component";
import { ActionsComponent } from './components/actions/actions.component';

@Component({
  selector: 'timestable',
  standalone: true,
  templateUrl: './timestable.component.html',
  styleUrl: './timestable.component.scss',
  imports: [TableRowComponent, ActionsComponent]
})
export class TimestableComponent {
  options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}
