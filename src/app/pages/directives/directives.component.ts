import { Component } from '@angular/core';
import { BuiltInDirectivesComponent } from '../../components/_directives/built-in-directives/built-in-directives.component';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [BuiltInDirectivesComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {}
