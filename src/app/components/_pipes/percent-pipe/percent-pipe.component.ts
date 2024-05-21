import { Component } from '@angular/core';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-percent-pipe',
  standalone: true,
  imports: [PercentPipe],
  templateUrl: './percent-pipe.component.html',
  styleUrl: './percent-pipe.component.css',
})
export class PercentPipeComponent {
  myNumber: number = 0.1234;
}
