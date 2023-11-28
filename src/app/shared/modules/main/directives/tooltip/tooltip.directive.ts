import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input() tooltip: string;

  elToolTip: any;
  timeout: ReturnType<typeof setTimeout>;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {

    if (!this.elToolTip) {
      this.timeout = setTimeout(() => {
        this.showHint();
      }, 500)
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    clearTimeout(this.timeout)
    if (this.elToolTip) {
      this.removeHint();
    }
  }

  ngOnInit() {
  }

  removeHint() {
    this.renderer.removeClass(this.elToolTip, 'tooltip');
    this.renderer.removeChild(document.body, this.elToolTip);
    this.elToolTip = null;
  }

  showHint() {
    console.log(this.renderer)
    this.elToolTip = this.renderer.createElement('span');
    const text = this.renderer.createText(this.tooltip);
    this.renderer.appendChild(this.elToolTip, text);

    this.renderer.appendChild(document.body, this.elToolTip);
    this.renderer.addClass(this.elToolTip, 'tooltip');

    let hostPos = this.elementRef.nativeElement.getBoundingClientRect();

    let top = hostPos.top;
    let left = hostPos.left;

    this.renderer.setStyle(this.elToolTip, 'top', `${top}px`);
    this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
  }
}
