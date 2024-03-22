import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
import { FeedComponent } from './feed/feed.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { SelectdetailComponent } from './selectdetail/selectdetail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AdventureListComponent, FeedComponent, CharacterListComponent, SelectdetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
