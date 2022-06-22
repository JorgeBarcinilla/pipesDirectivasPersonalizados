import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appResaltadoDinamico]'
})
export class ResaltadoDinamicoDirective {

   @Input('appResaltadoDinamico') set color(color:string){
    this.elementRef.nativeElement.style.backgroundColor = color || 'yellow'
  }

  constructor(private elementRef: ElementRef) { }

}
