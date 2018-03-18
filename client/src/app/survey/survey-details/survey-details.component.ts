import { Survey } from './../../survey';
import { SurveyService } from './../../services/survey.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
survey: Survey = new Survey();

  constructor( private route: ActivatedRoute,
               private surveyService: SurveyService,
               private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.surveyService.getOneSurvey(params.get('survey_id')).subscribe(
        survey => this.survey = survey[0]
      );
    });
  }
  voteUp(inSurvey, option) {

    if (option === 'option1') {
      inSurvey.option1.votes ++;
    } else if (option === 'option2') {
      inSurvey.option2.votes ++;
    } else if (option === 'option3') {
      inSurvey.option3.votes ++;
    } else if (option === 'option4') {
      inSurvey.option4.votes ++;
    }
    // console.log('-------------   votUp after if');
    // console.log(inSurvey);

    this.surveyService.vote(inSurvey._id, inSurvey).subscribe(survey => console.log('voted in details page', survey));
  }
}
