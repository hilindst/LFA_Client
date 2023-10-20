import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  @Output() featureSelected = new EventEmitter<string>();

  user = new User ("Space Ghost", "sg@coast2coast.com", "../../assets/img/spaceghost.png")

}


