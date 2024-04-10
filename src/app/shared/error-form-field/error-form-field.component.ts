import { Component, ContentChild, OnInit } from '@angular/core';
import { ShowErrorDirective } from '../directives/show-error.directive';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-error-form-field',
  templateUrl: './error-form-field.component.html',
  styleUrls: ['./error-form-field.component.css']
})
export class ErrorFormFieldComponent implements OnInit {
  @ContentChild(ShowErrorDirective, { static: true }) errorDirective!: ShowErrorDirective;

  constructor(private errorService: ErrorService) {
   }

  get errorMessage(): string | null {

    const errors = Object.entries(
      this.errorDirective?.ngControl?.control?.errors || {}
    );

    if (!this.errorDirective?.ngControl?.dirty && !this.errorDirective?.ngControl?.touched) return '';
    if (!errors.length) { return null;
    }

    const passedControlName = this.errorDirective?.controlName;
    const formControlName = passedControlName ?? 'This field';
    return this.errorService.getErrorValidationMessage(formControlName, errors);
  }

  ngOnInit() {
    if (!this.errorDirective) {
      throw new Error('Without showError directive this is a useless component!');
    }
  }
}
