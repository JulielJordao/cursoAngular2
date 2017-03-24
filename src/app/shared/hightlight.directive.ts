import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer,
  Input // Reponsável por acesar o DOM
} from '@angular/core';

@Directive({
  selector: '[highligth]'
})
export class HightlightDirective {

  // A função pode receber qualquer nome
  @HostListener('mouseenter') onmouseover() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement, 'background-color', 'yellow'
    // );

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onmouseleave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor : String;

  @Input() defaultColor: string = 'write';
  @Input() hightlightColor: string = 'yellow';

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {

  }

  ngOnInit(){
    this.backgroundColor = 'gray';
  }

}
