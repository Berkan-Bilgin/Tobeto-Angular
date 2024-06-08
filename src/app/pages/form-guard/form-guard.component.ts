import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form-guard',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-guard.component.html',
  styleUrl: './form-guard.component.css',
})
export class FormGuardComponent {
  addProductForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      productName: ['', Validators.required],
      quantity: [0],
    });
  }

  onSubmit() {
    console.log('mahmut');
  }

  canDeactivate(): boolean {
    if (this.addProductForm.dirty) {
      return confirm(
        'Sayfadan ayrılmak istediğinize emin misiniz? Kaydedilmemiş değişiklikler kaybolacak.',
      );
    }
    return true;
  }
}
