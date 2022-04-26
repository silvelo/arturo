import { Component, OnInit } from '@angular/core'
import { ButterService } from 'src/app/data/butter/service/butter.service'
import { Education } from 'src/app/data/butter/types/education'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public educationList: Education[] = []
  constructor(private butterService: ButterService) {}

  async ngOnInit() {
    const butterResponse = await this.butterService.getEducation()
    this.educationList = butterResponse.data.education
  }
}
