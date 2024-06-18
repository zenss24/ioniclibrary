import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  signup() {
    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
