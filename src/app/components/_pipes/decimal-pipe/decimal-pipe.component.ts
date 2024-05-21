import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-decimal-pipe',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './decimal-pipe.component.html',
  styleUrl: './decimal-pipe.component.css',
})
export class DecimalPipeComponent {}
