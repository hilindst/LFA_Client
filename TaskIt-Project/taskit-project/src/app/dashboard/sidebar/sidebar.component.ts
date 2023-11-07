import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../shared/auth/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(public user: User){}

}


