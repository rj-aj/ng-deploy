
import { AuthService } from './../../services/auth.service';
import { Survey } from './../../survey';
import { SurveyService } from './../../services/survey.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';



@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: any;

  userId;
  loggedIn: boolean;


constructor(private surveyService: SurveyService,
            private cookieService: CookieService,
            private authService: AuthService,
            private router: Router ) { }

  ngOnInit() {
    this.authService.loggedIn$.subscribe(authed => (this.loggedIn = authed));
    console.log('*******', this.userId);
     this.surveyService.getSurveys().subscribe(
    data => {
      console.log('"got our data!"', data);
      this.surveys = data;
    },
    error => console.log('error retrieving surveys', error)
  );
  this.userId = this.cookieService.get('UserID');
  console.log('========', this.userId.toString());
}

isAuthed(): boolean {
  return this.authService.isAuthed();
}
logout(): void {
  this.authService.logout().subscribe(() => this.router.navigateByUrl('/'));
}

onDelete(id) {
  console.log(this.userId);
  this.surveyService.deleteSurvey(id).subscribe(
    deletedSurvey => {
      console.log('deleted survey');
      this.surveys = this.surveys.filter(survey => survey._id !== id);
    },
    error => {
      console.log('error deleting survey');
    }
  );
}


}




