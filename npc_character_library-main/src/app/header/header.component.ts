import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../shared/services/search.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private searchService: SearchService, private authService: AuthService) {}

  onAddNpc(): void {
    // Add NPC button click event
    console.log('Add NPC button clicked');
    this.router.navigate(['new']);
  }

  signOut() {
    this.authService.signOut();
    this.router.navigateByUrl('landing');
  }
}
