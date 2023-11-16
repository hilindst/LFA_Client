import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  isAuthenticated = false;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService){}
  loadedFeature = 'kanban-board';
  title = 'taskit-project';

  ngOnInit(){


  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  /* ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
  } */
  }
