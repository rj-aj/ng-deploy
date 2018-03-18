import { HttpClientModule } from '@angular/common/http';
import { SurveyService } from './services/survey.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SurveyDetailsComponent } from './survey/survey-details/survey-details.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';
import { SurveyNewComponent } from './survey/survey-new/survey-new.component';
import { CookieModule } from 'ngx-cookie';
import { HttpModule } from '@angular/http';
import { SearchFilterPipePipe } from './search-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SurveyDetailsComponent,
    SurveyListComponent,
    SurveyNewComponent,
    SearchFilterPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [AuthService, SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
