import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { User } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors: string[] = [];
  user: User = new User();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.authService.login(user).subscribe(
      () => this.router.navigateByUrl('/dashboard'),
      error => {
        this.handleErrors(error.json());
      }
    );
  }

  private handleErrors(errors: string[] | string): void {
    this.errors = Array.isArray(errors) ? errors : [errors];
     }
}
