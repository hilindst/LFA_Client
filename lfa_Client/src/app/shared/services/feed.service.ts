import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { Adventure } from '../models/adventure';
import { environment } from '../../../environments/environment';

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
