export interface CertificationObject {
  certifications: Certification[]
}

export interface Certification {
  name: string
  company: string
  expiration_date: string
  expedition_date: string
  url: string
  expires: boolean
  company_logo: string
}
