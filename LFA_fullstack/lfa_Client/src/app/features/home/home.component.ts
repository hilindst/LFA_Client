import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
import { FeedComponent } from './feed/feed.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { SelectdetailComponent } from './selectdetail/selectdetail.component';
import { Character } from '../../shared/models/character';
import { CharacterService } from '../../core/services/character.service';
import {MatTabsModule} from '@angular/material/tabs';
import { authTokenInterceptor } from '../../auth-token.interceptor';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, FooterComponent, HeaderComponent, AdventureListComponent, CharacterListComponent, FeedComponent, SelectdetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	playerCharacters: Character[] = [];
  selectedIndex: number = 0; // Set the default active tab index

	constructor(private characterService: CharacterService, private authService: AuthService) {}

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
	}
}
