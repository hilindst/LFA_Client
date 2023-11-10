import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Output() featureSelected = new EventEmitter<string>();
  isAuthenticated = false;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    })
  }
  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
}
}


