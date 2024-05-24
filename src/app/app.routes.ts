import { Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponents } from './pages/products/products.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TranslateExampleComponent } from './pages/translate-example/translate-example.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { LoginComponent } from './pages/_auth/login/login.component';
import { SignupComponent } from './pages/_auth/signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'signup', component: SignupComponent, title: 'Signup' },
  { path: 'products', component: ProductsComponents, title: 'Products' },

  { path: 'pipes', component: PipesComponent, title: 'Pipes' },
  { path: 'directives', component: DirectivesComponent, title: 'Directives' },

  { path: 'categories', component: CategoriesComponent, title: 'Categories' },
  {
    path: 'translate',
    component: TranslateExampleComponent,
    title: 'Translate',
  },

  {
    path: 'category/update/:id',
    component: UpdateCategoryComponent,
    title: 'Categories',
  },
];
