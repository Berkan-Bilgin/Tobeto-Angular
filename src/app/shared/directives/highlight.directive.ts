import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') highlightColor!: string;
  @Input() description!: string; // Description parametresi için input tanımlıyoruz.
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'gainsboro';
  }

  ngOnInit(): void {
    console.log('description nedir', this.description);
    console.log('length nedir', this.description.length);

    if (this.description.length > 30) {
      this.el.nativeElement.style.backgroundColor = 'blue';
    }
  }
}
