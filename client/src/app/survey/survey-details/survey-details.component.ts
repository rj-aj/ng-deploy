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
survey: Survey;

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
  voteUp(id, votes) {

    if (votes === 'votes') {
      this.survey.option1.votes ++;
    } else if (votes === 'votes') {
      this.survey.option2.votes ++;
    } else if (votes === 'votes') {
      this.survey.option3.votes ++;
    } else if (votes === 'votes') {
      this.survey.option4.votes ++;
    }

    this.surveyService.vote(id, this.survey).subscribe(survey => console.log('voted in details page'));
  }
}
