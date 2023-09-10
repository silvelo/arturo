import { Directive } from '@angular/core';

@Directive({
  selector: `silvelo-card-content, [silvelo-card-content], [silveloCardContent]`,
  host: { class: 'block text-gray-500 text-sm mt-3' },
})
export class CardContentDirective {}
