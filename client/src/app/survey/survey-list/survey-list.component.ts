import { Survey } from './../../survey';
import { SurveyService } from './../../services/survey.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: [any];
  filter: String;
  userId;
  sub: Subscription;

constructor(private surveyService: SurveyService, private cookieService: CookieService) { }

  ngOnInit() {
     this.surveyService.getSurveys().subscribe(
    data => {
      console.log('"got our data!"', data);
      this.surveys = data['surveys'];
    },
    error => console.log('error retrieving surveys', error)
  );
  this.userId = this.cookieService.get('userID');
}




}
