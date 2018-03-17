import { Survey } from './../../survey';
import { SurveyService } from './../../services/survey.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey-new',
  templateUrl: './survey-new.component.html',
  styleUrls: ['./survey-new.component.css']
})
export class SurveyNewComponent implements OnInit {

  survey: Survey = new Survey();
  creatingErrors: string[] = [];

  constructor(private surveyService: SurveyService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('creating new survey');
    this.surveyService.createSurvey(this.survey).subscribe(
      survey => this.router.navigateByUrl('/dashboard'),
      error => { console.log ('error creating a new survey', error); }
    );
  }
}
