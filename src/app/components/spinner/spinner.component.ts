import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../../services/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SpinnerComponent {
  constructor(public loader: LoaderService) {}
}
