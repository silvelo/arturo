import { Directive } from '@angular/core';

@Directive({
  selector: `silvelo-card-header, [silvelo-card-header], [silveloCardHeader]`,
  host: { class: 'flex' },
})
export class CardHeaderDirective {}
