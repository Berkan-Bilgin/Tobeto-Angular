import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';

@Component({
  selector: 'app-date-pipe',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date-pipe.component.html',
  styleUrl: './date-pipe.component.css',
})
export class DatePipeComponent {
  currentDate = new Date();
}
