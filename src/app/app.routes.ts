import { Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponents } from './pages/products/products.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProductsComponents, title: 'Products' },

  { path: 'categories', component: CategoriesComponent, title: 'Categories' },

  {
    path: 'category/update/:id',
    component: UpdateCategoryComponent,
    title: 'Categories',
  },
];
