import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CookieService } from 'ngx-cookie';
import { map, tap } from 'rxjs/operators';
import { User } from '../user';

@Injectable()
export class AuthService {
private base = '/api/auth';

loggedIn$ = new BehaviorSubject(this.isAuthed());

  constructor(private http: Http, private cookieService: CookieService) { }


isAuthed(): boolean {
  const session = this.cookieService.get('session');
  const userId = this.cookieService.get('UserID');
  const expiration = parseInt(this.cookieService.get('expiration'), 10);
  return session && userId && expiration && expiration > Date.now();
}

login(user: User): Observable<User> {
  return this.http
    .post(`${this.base}/login`, user)
    .pipe(
      map(response => response.json()),
      tap(() => this.loggedIn$.next(true))
    );
}


logout(): Observable<any> {
  return this.http
    .delete(`${this.base}/logout`)
    .pipe(
      map(response => response.json()),
      tap(() => this.loggedIn$.next(false))
    );
}


}
