import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  constructor(private elem : ElementRef) { }
  @HostListener ('click') onClicks() {
    this.cardHighlight('grey');
  }

  public cardHighlight (action : string) {
     this.elem.nativeElement.style.backgroundColor = action;
  }

}
