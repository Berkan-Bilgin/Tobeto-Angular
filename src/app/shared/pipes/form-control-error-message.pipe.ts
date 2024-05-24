import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  standalone: true,
  name: 'formControlErrorMessage',

  //Form her değiştiğinde pipe 'a tekrar girmesi için yazdım bunu doğru bir yaklaşım mı bu ?
  pure: false,
})
export class FormControlErrorMessagePipe implements PipeTransform {
  transform(control: AbstractControl | null): string {
    if (!control || !control.errors) {
      return '';
    }

    const errors = control.errors;
    console.log('Form control errors:', errors);
    console.log('Form control :', control.value);

    if (control.invalid && (control.dirty || control.touched)) {
      console.log('Form control errors:', errors);

      if (errors['required']) {
        return `field is required`;
      }

      if (errors['minlength']) {
        return `Minimum length for field is ${errors['minlength'].requiredLength} characters`;
      }

      if (errors['maxlength']) {
        return `Maximum length for field is ${errors['maxlength'].requiredLength} characters`;
      }

      if (errors['email']) {
        return `Please enter a valid email address for field`;
      }

      return `Invalid field`;
    }

    return '';
  }
}
