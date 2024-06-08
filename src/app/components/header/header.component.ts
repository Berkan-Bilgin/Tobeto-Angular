import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderService } from '../../services/loading.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private loaderService: LoaderService) {}

  loader = this.loaderService.isLoading$;

  showLoader() {
    console.log(this.loaderService.isLoading$);
  }
}
