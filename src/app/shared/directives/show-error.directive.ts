import { Directive, ElementRef, Input, Optional, Renderer2, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
  selector: 'input[showError], textarea[showError], select[showError]',
})
export class ShowErrorDirective {
  @Input() controlName: string="";
  constructor(@Optional() @Self() public ngControl: NgControl) {
  }


  ngOnInit() {
  }
}
