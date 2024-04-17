import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../shared/models/character';
import { CharacterService } from '../../../shared/services/character.service';
import { CommonModule, NgFor } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})

export class CharacterListComponent implements OnInit {
  @Input({ required: true }) characters: Character[] = [];
  playerId!: number;

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
