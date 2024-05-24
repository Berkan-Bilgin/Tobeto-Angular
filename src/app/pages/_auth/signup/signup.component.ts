import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormControlErrorMessagePipe } from '../../../shared/pipes/form-control-error-message.pipe';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormControlErrorMessagePipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
    }
  }

  showFormDetails() {
    console.log(this.signupForm);
    console.log('firstName', this.firstName?.errors);
  }
}
