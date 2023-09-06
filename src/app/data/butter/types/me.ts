export interface Me {
  name: string;
  surname: string;
  job: string;
  profile_photo: string;
  header_photo: string;
  description: string;
}

export interface MeObject {
  me: Me[];
}
