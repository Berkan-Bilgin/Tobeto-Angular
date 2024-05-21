import { Component } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-slice-pipe',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './slice-pipe.component.html',
  styleUrl: './slice-pipe.component.css',
})
export class SlicePipeComponent {
  myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
