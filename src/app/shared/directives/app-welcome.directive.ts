import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appWelcome]',
  standalone: true,
})
export class AppWelcomeDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
  ) {}

  @Input() set appWelcome(delay: number) {
    this.viewContainer.clear();

    // "Welcome" mesajını ekle
    const welcomeMessage =
      this.templateRef.elementRef.nativeElement.ownerDocument.createElement(
        'div',
      );
    welcomeMessage.textContent = 'Welcome';
    this.viewContainer.element.nativeElement.appendChild(welcomeMessage);

    setTimeout(() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, delay);
  }
}
