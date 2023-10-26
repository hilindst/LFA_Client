import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(){}

  loadedFeature = 'kanban'
  title = 'taskit-project';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}