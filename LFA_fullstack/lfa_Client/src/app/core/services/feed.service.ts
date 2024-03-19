import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Blog } from '../../shared/models/blog';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Character } from '../../shared/models/character';
import { Adventure } from '../../shared/models/adventure';

@Injectable({
	providedIn: 'root',
})
export class FeedService {
	constructor(private http: HttpClient) {}

	getCharacters(): Observable<Character[]> {
		return this.http.get<Character[]>(`${environment.apiUrl}/characters`);
	}
  getAdventures(): Observable<Adventure[]> {
		return this.http.get<Adventure[]>(`${environment.apiUrl}/adventures`);
	}
}
