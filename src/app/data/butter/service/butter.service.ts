import { Injectable } from '@angular/core'
import Butter from 'buttercms'
import { AwardObject } from '../types/award'
import { IButterData } from '../types/butter'
import { CertificationObject } from '../types/certification'
import { EducationObject } from '../types/education'
import { ExperienceObject } from '../types/experience'
import { MeObject } from '../types/me'
import { PublicationObject } from '../types/publication'
import { SidenavObject } from '../types/sidenav'
import { SocialObject } from '../types/social'

const routes = {}

@Injectable({
  providedIn: 'root'
})
export class ButterService {
  private butter = Butter('fed7d717ce0e71dd943cba17237589d3eaafb275')
  constructor() {}

  getSidenav() {
    return this.butter.content
      .retrieve(['sidenav'])
      .then((response) => response.data as IButterData<SidenavObject>)
  }

  getMe() {
    return this.butter.content
      .retrieve(['me'])
      .then((response) => response.data as IButterData<MeObject>)
  }

  getSocial() {
    return this.butter.content
      .retrieve(['social'])
      .then((response) => response.data as IButterData<SocialObject>)
  }

  getPortfolio() {
    return this.butter.content
      .retrieve(['portfolio'])
      .then((response) => response.data as IButterData<SidenavObject>)
  }

  getEducation() {
    return this.butter.content
      .retrieve(['education'])
      .then((response) => response.data as IButterData<EducationObject>)
  }

  getExperience() {
    return this.butter.content
      .retrieve(['experience'])
      .then((response) => response.data as IButterData<ExperienceObject>)
  }

  getCertifications() {
    return this.butter.content
      .retrieve(['certification'])
      .then((response) => response.data as IButterData<CertificationObject>)
  }

  getPublications() {
    return this.butter.content
      .retrieve(['publications'])
      .then((response) => response.data as IButterData<PublicationObject>)
  }

  getAwards() {
    return this.butter.content
      .retrieve(['awards'])
      .then((response) => response.data as IButterData<AwardObject>)
  }
}
