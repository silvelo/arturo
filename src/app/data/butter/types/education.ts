export interface EducationObject {
  education: Education[]
}

export interface Education {
  institution: string
  degree: string
  start_date: string
  end_date: string
  grade: number
  description: string
  institution_logo: string
}
