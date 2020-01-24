import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[appTimes]"
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input("appTimes") set render(time: number) {
    this.viewContainer.clear();
    for (let i = 0; i < time; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
