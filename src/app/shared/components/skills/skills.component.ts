import { Component, OnInit } from '@angular/core'
import { ButterService } from '@app/data/butter/service/butter.service'
import { Skill } from '@app/data/butter/types/skills'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'silvelo-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills: Skill[] = []

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const skillsResponse = await firstValueFrom(this.butterService.getSkills())
    this.skills = skillsResponse.data.skills
  }
}
