import { NgModule } from '@angular/core';
import { CardTitleGroupComponent } from '@lazy-shared/components/card/card-title-group.component';
import { SocialComponent } from '@lazy-shared/components/social/social.component';
import { TabComponent } from '@lazy-shared/components/tab/tab.component';
import { CardActionsDirective } from '@lazy-shared/directives/card-actions.directive';
import { CardContentDirective } from '@lazy-shared/directives/card-content.directive';
import { CardHeaderDirective } from '@lazy-shared/directives/card-header.directive';
import { CardLgImageDirective } from '@lazy-shared/directives/card-lg-image.directive';
import { CardSubtitleRightDirective } from '@lazy-shared/directives/card-subtitle-right.directive';
import { CardSubtitleDirective } from '@lazy-shared/directives/card-subtitle.directive';
import { CardTitleRightDirective } from '@lazy-shared/directives/card-title-right.directive';
import { CardXlImageDirective } from '@lazy-shared/directives/card-xl-image.directive';
import { IconButtonDirective } from '@lazy-shared/directives/icon-button.directive';
import { SharedModule } from '@shared/shared.module';
import { TabGroupComponent } from './components/tab-group/tab-group.component';

const CARD_COMPONENT = [
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

const TAB_COMPONENT = [TabGroupComponent, TabComponent];

@NgModule({
  imports: [SharedModule],
  exports: [CARD_COMPONENT, TAB_COMPONENT, IconButtonDirective, SocialComponent, SharedModule],
  declarations: [SocialComponent, IconButtonDirective, CARD_COMPONENT, TAB_COMPONENT],
})
export class LazySharedModule {}
