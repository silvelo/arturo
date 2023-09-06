import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { map } from 'rxjs';
import { Award, AwardObject } from '../types/award';
import { IButterData } from '../types/butter';
import { CertificationObject } from '../types/certification';
import { EducationObject } from '../types/education';
import { ExperienceObject } from '../types/experience';
import { MeObject } from '../types/me';
import { PortfolioObject } from '../types/portfolio';
import { PublicationObject } from '../types/publication';
import { SkillObject } from '../types/skills';
import { SocialObject } from '../types/social';

@Injectable()
export class ButterService {
  constructor(private http: HttpClient) {}

  getMe() {
    return this.butterContent<MeObject>('me', {}).pipe(map(data => data.me[0]));
  }

  getSocial() {
    return this.butterContent<SocialObject>('socials', {}).pipe(map(data => data.socials));
  }

  getEducation() {
    return this.butterContent<EducationObject>('educations', {}).pipe(map(data => data.educations));
  }

  getExperience() {
    return this.butterContent<ExperienceObject>('experiences', {}).pipe(map(data => data.experiences));
  }

  getCertifications() {
    return this.butterContent<CertificationObject>('certifications', {}).pipe(map(data => data.certifications));
  }

  getSkills() {
    return this.butterContent<SkillObject>('skills', {}).pipe(map(data => data.skills));
  }

  getPublications() {
    return this.butterContent<PublicationObject>('publications', {}).pipe(map(data => data.publications));
  }

  getAwards() {
    return this.butterContent<AwardObject>('awards', {}).pipe(
      map(data => data.awards),
      map(awards => awards.map(award => new Award(award)))
    );
  }

  getPortfolio() {
    return this.butterContent<PortfolioObject>('portfolios', {}).pipe(map(data => data.portfolios));
  }

  private butterContent<T>(key: string, params: { [key: string]: string | number | boolean }) {
    let httpParams = new HttpParams().set('auth_token', environment.token);
    Object.entries(params).forEach(([key, value]) => (httpParams = httpParams.set(key, value)));

    return this.http
      .get<IButterData<T>>(`${environment.apiUrl}${key}`, {
        params: httpParams,
      })
      .pipe(map(response => response.data));
  }
}
