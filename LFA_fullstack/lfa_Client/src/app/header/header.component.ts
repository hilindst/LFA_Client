import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

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
