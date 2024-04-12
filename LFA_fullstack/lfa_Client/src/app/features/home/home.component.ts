import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
import { FeedComponent } from './feed/feed.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { SelectdetailComponent } from './selectdetail/selectdetail.component';
import { Character } from '../../shared/models/character';
import { CharacterService } from '../../shared/services/character.service';
import {MatTabsModule} from '@angular/material/tabs';
import { authTokenInterceptor } from '../../auth-token.interceptor';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Adventure } from '../../shared/models/adventure';
import { AdventureService } from '../../shared/services/adventure.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, FooterComponent, AdventureListComponent, CharacterListComponent, FeedComponent, SelectdetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	playerCharacters: Character[] = [];
  playerAdventures: Adventure[] = [];
  selectedIndex: number = 0; // Set the default active tab index

	constructor(private characterService: CharacterService, private adventureService: AdventureService, private authService: AuthService, private router: Router) {}

  changeTab(index: number) {
    this.selectedIndex = index;
  }

	ngOnInit(): void {
    const playerId = this.authService.getPlayerId();
		this.characterService.getCharactersByPlayerId(playerId).subscribe({
			next: (characters) => {
				this.playerCharacters = characters;
			},
			error: (error) => {
				console.error(error);
			},
		});

    this.adventureService.getAdventuresByPlayerId(playerId).subscribe({
			next: (adventures) => {
				this.playerAdventures = adventures;
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

  onCreateCharacter():void {
    console.log('Create Character button clicked');
    this.router.navigate(['character/create']);
  }
  onCreateAdventure():void {
    console.log('Create Adventure button clicked');
    this.router.navigate(['adventure/create']);
  }






}
