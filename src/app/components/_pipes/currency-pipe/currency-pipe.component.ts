import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-currency-pipe',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './currency-pipe.component.html',
  styleUrl: './currency-pipe.component.css',
})
export class CurrencyPipeComponent {
  amount = 50;
}
