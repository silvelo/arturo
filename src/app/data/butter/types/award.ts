export interface AwardObject {
  awards: AwardResponse[];
}

export class Award {
  title: string;
  expedition_date: string;
  description: string;
  issued: string;
  testimonials: string[];
  issued_logo: string;

  constructor(award: AwardResponse) {
    this.title = award.title;
    this.expedition_date = award.expedition_date;
    this.description = award.description;
    this.issued = award.issued;
    this.issued_logo = award.issued_logo;

    if (award.testimonials) {
      this.testimonials = award.testimonials.split(',');
    } else {
      this.testimonials = [] as string[];
    }
  }
}

export interface AwardResponse {
  title: string;
  expedition_date: string;
  description: string;
  issued: string;
  testimonials?: string;
  issued_logo: string;
}
