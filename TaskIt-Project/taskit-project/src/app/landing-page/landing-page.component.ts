import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService){}

  checkAuthMode(){
    this.authService.isLoginMode = true;
  }

  ngOnInit(): void {

  }
}
