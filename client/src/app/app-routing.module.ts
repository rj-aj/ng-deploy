import { SurveyDetailsComponent } from './survey/survey-details/survey-details.component';
import { SurveyNewComponent } from './survey/survey-new/survey-new.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
},
{ path: 'dashboard', component: SurveyListComponent },
{ path: 'create', component: SurveyNewComponent },
{ path: 'survey/:survey_id', component: SurveyDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
