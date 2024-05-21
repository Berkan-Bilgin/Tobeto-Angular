import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-upper-case-pipe',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './upper-case-pipe.component.html',
  styleUrl: './upper-case-pipe.component.css',
})
export class UpperCasePipeComponent {
  myText: string = 'Angular UpperCase Pipe Example';
}
