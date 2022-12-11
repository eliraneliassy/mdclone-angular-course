import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements AfterViewInit {
  @Input() appChangeColor = 'red';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    

  }


  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('mouse enter');
  }
  ngAfterViewInit(): void {
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.appChangeColor);
  }

}
