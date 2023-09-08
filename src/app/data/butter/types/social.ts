import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface Social {
  id: IconName;
  link: string;
}

export interface SocialObject {
  socials: Social[];
}
