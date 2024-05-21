import { Component } from '@angular/core';
import { BuiltInDirectivesComponent } from '../../components/_directives/built-in-directives/built-in-directives.component';
import { AppButtonDirective } from '../../shared/directives/app-button.directive';
import { FormsModule } from '@angular/forms';
import { AppNoCharacterInputDirective } from '../../shared/directives/app-no-character-input.directive';
import { AppMultipleDirective } from '../../shared/directives/app-multiple.directive';
import { AppWelcomeDirective } from '../../shared/directives/app-welcome.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    BuiltInDirectivesComponent,
    AppButtonDirective,
    FormsModule,
    AppNoCharacterInputDirective,
    AppMultipleDirective,
    AppWelcomeDirective,
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  inputValue: string = '';
}
