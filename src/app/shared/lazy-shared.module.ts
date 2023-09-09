import { NgModule } from '@angular/core';

import { SocialComponent } from '@shared/components/social/social.component';
import { SharedModule } from '@shared/shared.module';
import {
  CardActionsDirective,
  CardComponent,
  CardContentDirective,
  CardHeaderDirective,
  CardLgImageDirective,
  CardSubtitleDirective,
  CardSubtitleRightDirective,
  CardTitleDirective,
  CardTitleGroupComponent,
  CardTitleIconDirective,
  CardTitleRightDirective,
  CardXlImageDirective,
} from './components/card/card.component';

const CARD_COMPONENT = [
  CardComponent,
  CardTitleDirective,
  CardTitleIconDirective,
  CardTitleGroupComponent,
  CardSubtitleDirective,
  CardContentDirective,
  CardActionsDirective,
  CardHeaderDirective,
  CardLgImageDirective,
  CardXlImageDirective,
  CardSubtitleRightDirective,
  CardTitleRightDirective,
];

@NgModule({
  imports: [SharedModule],
  exports: [CARD_COMPONENT, SocialComponent, SharedModule],
  declarations: [SocialComponent, CARD_COMPONENT],
})
export class LazySharedModule {}
