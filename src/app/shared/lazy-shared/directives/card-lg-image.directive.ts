import { Directive } from '@angular/core';

@Directive({
  selector: `[silvelo-card-lg-image], [silveloCardLgImage] `,
  host: { class: 'w-16 h-16 object-scale-down mr-5' },
})
export class CardLgImageDirective {}
