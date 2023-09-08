import { NgModule } from '@angular/core';
import { AwardsService } from '@data/awards/awards.service';
import { CertificationsService } from '@data/certifications/certifications.service';
import { EducationsService } from '@data/education/education.service';
import { ExperiencesService } from '@data/experience/experience.service';
import { MeService } from '@data/me/me.service';
import { PortfolioService } from '@data/portfolio/portfolio.service';
import { PublicationsService } from '@data/publications/publications.service';
import { SkillsService } from '@data/skills/skills.service';
import { SocialsService } from '@data/socials/socials.service';
@NgModule({
  providers: [
    AwardsService,
    CertificationsService,
    EducationsService,
    ExperiencesService,
    MeService,
    PortfolioService,
    PublicationsService,
    SkillsService,
    SocialsService,
  ],
})
export class DataModule {}
