import { Directive } from '@angular/core';

@Directive({
  selector: 'silvelo-icon-button, [silvelo-icon-button],[silveloIconButton]',
  host: { class: 'flex items-center justify-center w-12 h-12 m-2 p-1' },
})
export class IconButtonDirective {}
