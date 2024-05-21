import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, of, delay } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.css',
})
export class AsyncPipeComponent {
  data: Promise<string>;

  //"$" Bir datanın observable olduğunu belirtmek için kullanılır.
  data$: Observable<string>;

  observableData: string = '';

  constructor() {
    this.data = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Merhaba Promise Data!'), 2000);
    });

    this.data$ = of('Merhaba Observable Data!').pipe(delay(3000));
  }

  ngOnInit() {
    this.data$.subscribe((value) => {
      this.observableData = value;
    });
  }
}
