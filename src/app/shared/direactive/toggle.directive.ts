import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  @Input('appToggle') className!: string; // The class name to toggle

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onClick() {
    this.elementRef.nativeElement.classList.toggle(this.className);
    this.elementRef.nativeElement.nextElementSibling.classList.toggle(this.className);
  }
}
