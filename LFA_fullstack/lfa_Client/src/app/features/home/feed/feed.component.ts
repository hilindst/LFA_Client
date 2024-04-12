import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from '../../../core/services/feed.service';
import { Character } from '../../../shared/models/character';
import { Adventure } from '../../../shared/models/adventure';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {
  characters: Character[] = [];
  adventures: Adventure[] = [];
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.feedService.getCharacters();
    this.feedService.getAdventures();
  }

}

