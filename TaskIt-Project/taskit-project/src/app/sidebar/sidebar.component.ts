import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user = new User ("Space Ghost", "sg@coast2coast.com", "../../assets/img/spaceghost.png")

  ngOnInit(): void {

  }
}


