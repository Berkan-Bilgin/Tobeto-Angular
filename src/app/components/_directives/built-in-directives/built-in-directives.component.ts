import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-built-in-directives',
  standalone: true,
  imports: [NgClass, CommonModule, NgStyle, FormsModule],
  templateUrl: './built-in-directives.component.html',
  styleUrl: './built-in-directives.component.css',
})
export class BuiltInDirectivesComponent {
  // ngClass
  isActive: boolean = true;
  hasError: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  toggleError() {
    this.hasError = !this.hasError;
  }

  //ngStyle
  isSpecial: boolean = true;
  currentStyles: any = {
    'font-style': this.isSpecial ? 'italic' : 'normal',
    'font-weight': this.isSpecial ? 'bold' : 'normal',
    'font-size': this.isSpecial ? '24px' : '12px',
  };

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
    this.updateStyles();
  }

  updateStyles() {
    this.currentStyles = {
      'font-style': this.isSpecial ? 'italic' : 'normal',
      'font-weight': this.isSpecial ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
    console.log(this.currentStyles);
  }

  //ngModel

  name: string = '';
  setName() {
    this.name = 'Mahmut';
  }
}
