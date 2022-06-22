import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  @Input('appRepetir') set repetir(numero:number){
    for (let index = 0; index < numero; index++)
      this.viewContainer.createEmbeddedView(this.templateRef);
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
