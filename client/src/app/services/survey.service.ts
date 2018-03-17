import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Survey } from './../survey';

@Injectable()
export class SurveyService {

  private baseURL = '/api/survey';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }
  getSurveys() {
    return this.http.get(`${this.baseURL}`);
}
createSurvey(survey: Survey) {
  survey._user = this.cookieService.get('UserID');
  console.log('cookie userid' , this.cookieService.get('UserID'));

  return this.http.post(`${this.baseURL}`, survey);
}

getOneSurvey(id) {
  console.log('getOneSurvey', id);
  return this.http.get(`${this.baseURL}/${id}`);
}
deleteSurvey(id) {
  return this.http.delete<any>(`${this.baseURL}/${id}`);
}
vote(id, survey) {
  console.log('voted inside Sevice');
  return this.http.post(`${this.baseURL}/${id}`, survey);
}
}
