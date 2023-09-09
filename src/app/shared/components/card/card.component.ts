/* eslint-disable @angular-eslint/no-host-metadata-property */
// eslint-disable-next-line max-classes-per-file
import { Component, Directive } from '@angular/core';

@Component({
  selector: 'silvelo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { class: 'block bg-white shadow-lg rounded-xl p-4' },
})
export class CardComponent {}

@Directive({
  selector: `silvelo-card-title, [silvelo-card-title], [silveloCardTitle]`,
  host: { class: 'flex-1 text-lg text-gray-800 font-bold leading-none' },
})
export class CardTitleDirective {}

@Directive({
  selector: `silvelo-card-title-right, [silvelo-card-title-right], [silveloCardTitleRight]`,
  host: { class: 'text-sm text-gray-500' },
})
export class CardTitleRightDirective {}

@Directive({
  selector: `silvelo-card-subtitle, [silvelo-card-subtitle], [silveloCardSubtitle]`,
  host: { class: 'flex-1 text-gray-500 my-1' },
})
export class CardSubtitleDirective {}

@Directive({
  selector: `silvelo-card-subtitle-right, [silvelo-card-subtitle-right], [silveloCardSubtitleRight]`,
  host: { class: 'text-sm text-gray-500' },
})
export class CardSubtitleRightDirective {}

@Component({
  selector: `silvelo-card-title-group`,
  templateUrl: './card-title-group.component.html',
  host: { class: 'flex flex-col flex-auto flex-auto' },
})
export class CardTitleGroupComponent {}

@Directive({
  selector: `silvelo-card-header, [silvelo-card-header], [silveloCardHeader]`,
  host: { class: 'flex' },
})
export class CardHeaderDirective {}

@Directive({
  selector: `[silvelo-card-lg-image], [silveloCardLgImage] `,
  host: { class: 'w-16 h-16 object-scale-down mr-5' },
})
export class CardLgImageDirective {}

@Directive({
  selector: `[silvelo-card-xl-image], [silveloCardXlImage]`,
  host: { class: 'w-16 h-16 md:w-24 md:h-24 object-scale-down mr-5' },
})
export class CardXlImageDirective {}

@Directive({
  selector: `silvelo-card-title-icon, [silvelo-card-title-icon], [silveloCardTitleIcon]`,
  host: { class: 'flex flex-col' },
})
export class CardTitleIconDirective {}

@Directive({
  selector: `silvelo-card-content, [silvelo-card-content], [silveloCardContent]`,
  host: { class: 'block text-gray-500 text-sm mt-3' },
})
export class CardContentDirective {}

@Directive({
  selector: `silvelo-card-actions, [silvelo-card-actions], [silveloCardActions]`,
  host: { class: 'flex justify-center gap-4 flex-wrap mt-4' },
})
export class CardActionsDirective {}
