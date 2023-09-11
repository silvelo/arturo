import { Directive } from '@angular/core';

@Directive({
  selector: `[silvelo-card-xl-image], [silveloCardXlImage]`,
  host: { class: 'w-16 h-16 md:w-24 md:h-24 object-scale-down mr-5' },
})
export class CardXlImageDirective {}
