import { NgModule } from '@angular/core'
import { MaterialModule } from './material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { SocialComponent } from './components/social/social.component'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [SocialComponent],
  imports: [CommonModule, FontAwesomeModule, MaterialModule],
  exports: [CommonModule, MaterialModule, FlexLayoutModule, SocialComponent]
})
export class SharedModule {}
