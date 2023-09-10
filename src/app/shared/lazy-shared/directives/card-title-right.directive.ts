import { Directive } from '@angular/core';

@Directive({
  selector: `silvelo-card-title-right, [silvelo-card-title-right], [silveloCardTitleRight]`,
  host: { class: 'text-sm text-gray-500' },
})
export class CardTitleRightDirective {}
