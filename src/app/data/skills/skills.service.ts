import { Injectable } from '@angular/core';

import { ButterService } from '@data/butter/services/butter.service';
import { Skill } from '@data/skills/skills';

@Injectable()
export class SkillsService extends ButterService<Skill> {
  constructor() {
    super('skills');
  }
}
