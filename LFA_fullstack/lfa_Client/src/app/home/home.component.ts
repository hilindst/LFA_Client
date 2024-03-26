import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
import { FeedComponent } from './feed/feed.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { SelectdetailComponent } from './selectdetail/selectdetail.component';
import { Character } from '../shared/models/character';
import { CharacterService } from '../core/services/character.service';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, FooterComponent, HeaderComponent, AdventureListComponent, CharacterListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	playerCharacters: Character[] = [];

	constructor(private characterService: CharacterService) {}

	ngOnInit(): void {
		this.characterService.getCharactersByPlayerId().subscribe({
			next: (characters) => {
				this.playerCharacters = characters;
			},
			error: (error) => {
				console.error(error);
			},
		});
	}
}
