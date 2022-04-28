import { HttpClient, HttpParams } from '@angular/common/http'
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

@Injectable({
  providedIn: 'root'
})
export class ButterService {
  constructor(private http: HttpClient) {}

  getSidenav() {
    return this.butterContent<IButterData<SidenavObject>>('sidenav', {})
  }

  getMe() {
    return this.butterContent<IButterData<MeObject>>('me', {})
  }

  getSocial() {
    return this.butterContent<IButterData<SocialObject>>('social', {})
  }

  getPortfolio() {
    return this.butterContent<IButterData<SidenavObject>>('portfolio', {})
  }

  getEducation() {
    return this.butterContent<IButterData<EducationObject>>('education', {})
  }

  getExperience() {
    return this.butterContent<IButterData<ExperienceObject>>('experience', {})
  }

  getCertifications() {
    return this.butterContent<IButterData<CertificationObject>>(
      'certification',
      {}
    )
  }

  getPublications() {
    return this.butterContent<IButterData<PublicationObject>>(
      'publications',
      {}
    )
  }

  getAwards() {
    return this.butterContent<IButterData<AwardObject>>('awards', {})
  }

  private butterContent<T>(
    key: string,
    params: { [key: string]: string | number | boolean }
  ) {
    let httpParams = new HttpParams().set(
      'auth_token',
      'fed7d717ce0e71dd943cba17237589d3eaafb275'
    )
    Object.entries(params).forEach(
      ([key, value]) => (httpParams = httpParams.set(key, value))
    )

    return this.http.get<T>(`https://api.buttercms.com/v2/content/${key}`, {
      params: httpParams
    })
  }
}
