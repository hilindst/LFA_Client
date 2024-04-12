import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { AdventureService } from '../../../shared/services/adventure.service';
import { Adventure } from '../../../shared/models/adventure';


@Component({
  selector: 'app-adventure-list',
  standalone: true,
  imports: [],
  templateUrl: './adventure-list.component.html',
  styleUrl: './adventure-list.component.css'
})

export class AdventureListComponent implements OnInit {
  @Input({ required: true }) adventures: Adventure[] = [];
  playerId!: number; // Example player ID, replace with actual player ID

  constructor(private adventureService: AdventureService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getPlayerIdAndFetchAdventures();
  }

  getPlayerIdAndFetchAdventures(): void {
    this.playerId = this.authService.getPlayerId();
    if (this.playerId) {
      this.getAdventures();
    } else {
      // Handle case when player ID is not available
    }
  }

  getAdventures(): void {
    this.adventureService.getAdventuresByPlayerId(this.playerId)
      .subscribe(adventures => this.adventures = adventures);
  }

  ngOnDestroy():void {

  }
}
