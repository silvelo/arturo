export interface PublicationObject {
  publications: Publication[];
}

export interface Publication {
  title: string;
  editorial: string;
  publication_date: string;
  editorial_logo: string;
  url: string;
  grade: string;
}
