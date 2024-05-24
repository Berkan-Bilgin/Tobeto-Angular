import {
  Directive,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appWelcome]',
})
export class AppWelcomeDirective {
  private welcomeMessage!: HTMLElement;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
  ) {}

  @Input() set appWelcome(delay: number) {
    console.log('ne lan bu', this.viewContainerRef);

    this.welcomeMessage = this.renderer.createElement('h1');
    this.renderer.setProperty(this.welcomeMessage, 'textContent', 'Welcome');
    const containerElement = this.viewContainerRef.element.nativeElement;
    this.renderer.appendChild(containerElement.parentNode, this.welcomeMessage);

    console.log(this.renderer);

    setTimeout(() => {
      this.renderer.removeChild(
        containerElement.parentNode,
        this.welcomeMessage,
      );
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, delay);
  }
}
