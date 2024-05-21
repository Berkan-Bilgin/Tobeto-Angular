import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule],
  standalone: true,
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  updateForm: FormGroup;
  categoryId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
  ) {
    const { id } = this.route.snapshot.params;
    this.categoryId = +id;
    this.updateForm = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    console.log('categoryId', this.categoryId);
    console.log('route', this.route);
    this.categoryService
      .getCategoryById(this.categoryId)
      .subscribe((category: Category) => {
        this.updateForm.patchValue({
          name: category.name,
          description: category.description,
        });
      });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      console.log('nedir', this.updateForm.valid);
      const updatedCategory = this.updateForm.value;
      this.categoryService
        .updateCategory(this.categoryId, updatedCategory)
        .subscribe(() => {
          console.log('mahmut');
          this.router.navigate(['/categories']);
        });
    }
  }
}
