import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../services/category.service';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from '../../shared/directives/highlight.directive';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatTableModule, RouterModule, HighlightDirective],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  dataSource = new MatTableDataSource<Category>();
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  // deleteCategory(categoryId: number): void {
  //   this.categoryService.deleteCategory(categoryId).subscribe(() => {
  //     this.dataSource.data = this.dataSource.data.filter(
  //       (category) => category.id !== categoryId,
  //     );
  //   });
  // }

  deleteCategory(categoryId: number): void {
    const originalData = this.dataSource.data;
    this.dataSource.data = this.dataSource.data.filter(
      (category) => category.id !== categoryId,
    );

    this.categoryService.deleteCategory(categoryId).subscribe({
      next: () => {
        console.log('Silme işlemi başarılı.');
      },
      error: (err) => {
        console.error('Silme işlemi başarısız oldu:', err);
        this.dataSource.data = originalData;

        alert('Silme işlemi başarısız oldu. Lütfen tekrar deneyin.');
      },
    });
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'update',
    'delete',
  ];
}
