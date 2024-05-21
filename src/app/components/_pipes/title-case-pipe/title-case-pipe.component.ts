import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-title-case-pipe',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './title-case-pipe.component.html',
  styleUrl: './title-case-pipe.component.css',
})
export class TitleCasePipeComponent {
  myText: string = 'angular title case pipe example';
}
