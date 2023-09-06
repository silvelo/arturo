export interface ExperienceObject {
  experiences: Experience[];
}

export interface Experience {
  job: string;
  company_name: string;
  start_date: string;
  end_date: string;
  current: boolean;
  company_logo: string;
  description: string;
}
