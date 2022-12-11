import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngNotIf]'
})
export class NgNotIfDirective {

  @Input() set ngNotIf(condition: boolean) {
    if (condition) {
      this.vcr.clear();
    } else {
      this.vcr.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private vcr: ViewContainerRef) { }

}
