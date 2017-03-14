import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer // Reponsável por acesar o DOM
} from '@angular/core';

@Directive({
  selector: '[highligthMouse]'
})
export class HighligthMouseDirective {

  // A função pode receber qualquer nome
  @HostListener('mouseenter') onmouseover() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement, 'background-color', 'yellow'
    // );

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onmouseleave(){
    this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor : String;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {

  }

}
