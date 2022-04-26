import { Component, OnInit } from '@angular/core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { ButterService } from 'src/app/data/butter/service/butter.service'
import { Social } from 'src/app/data/butter/types/social'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  public socialList: Social[] = []
  public faLinkedin = faLinkedin
  public faGithub = faGithub
  public faEnvelope = faEnvelope

  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterResponse = await this.butterService.getSocial()
    this.socialList = butterResponse.data.social
  }

  onClick(link: string) {
    window.open(link)
  }
}
