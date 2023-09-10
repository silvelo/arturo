import { Directive } from '@angular/core';

@Directive({
  selector: `silvelo-card-subtitle-right, [silvelo-card-subtitle-right], [silveloCardSubtitleRight]`,
  host: { class: 'text-sm text-gray-500' },
})
export class CardSubtitleRightDirective {}
