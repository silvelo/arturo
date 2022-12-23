import { Component, OnInit } from '@angular/core'
import { Skill } from '@app/data/butter/types/skills'
import { ButterService } from '@data/butter/service/butter.service'
import { Me } from '@data/butter/types/me'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'silvelo-elo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public me: Me | undefined = undefined
  public skills: Skill[] = []

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterResponse = await firstValueFrom(this.butterService.getMe())
    const skillsResponse = await firstValueFrom(this.butterService.getSkills())
    this.skills = skillsResponse.data.skills
    this.me = butterResponse.data.me[0]
  }
}
