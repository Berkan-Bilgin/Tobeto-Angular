import { Component } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-lower-case-pipe',
  standalone: true,
  imports: [LowerCasePipe],
  templateUrl: './lower-case-pipe.component.html',
  styleUrl: './lower-case-pipe.component.css',
})
export class LowerCasePipeComponent {
  title: string = 'Hello World';
  description: string = 'This is an Example of Lowercase Pipe';
}
