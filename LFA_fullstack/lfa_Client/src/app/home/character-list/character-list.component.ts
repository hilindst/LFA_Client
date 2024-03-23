import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/models/character';
import { CharacterService } from '../../core/services/character.service'; // Import the CharacterService
import { CommonModule, NgFor } from '@angular/common';
import { Player } from '../../shared/models/player';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})

export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  playerId: number; // Example player ID, replace with actual player ID

  constructor(private characterService: CharacterService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getPlayerIdAndFetchCharacters();
  }

  getPlayerIdAndFetchCharacters(): void {
    this.playerId = this.authService.getPlayerId();
    if (this.playerId) {
      this.getCharacters();
    } else {
      // Handle case when player ID is not available
    }
  }

  getCharacters(): void {
    this.characterService.getCharactersByPlayerId(this.playerId)
      .subscribe(characters => this.characters = characters);
  }
}
