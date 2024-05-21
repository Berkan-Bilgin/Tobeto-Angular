import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppNoCharacterInput]',
  standalone: true,
})
export class AppNoCharacterInputDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent): void {
    //HTML input element olduğunu belirtmessen valuesunu görmüyor?.
    const inputElement = event.target as HTMLInputElement;
    const initialValue = inputElement.value;

    // const result = initialValue
    //   .split('')
    //   .filter((char) => !('0' <= char && char <= '9'))
    //   .join('');

    // inputElement.value = result;

    inputElement.value = initialValue.replace(/[0-9]/g, '');

    if (initialValue !== inputElement.value) {
      inputElement.dispatchEvent(new Event('input'));

      // event.stopPropagation();
    }
  }
}
