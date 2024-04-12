import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    private charactersUrl = 'characters';

    constructor(private http: HttpClient) { }

    getCharactersByPlayerId(playerId: number): Observable<Character[]> {
      const url = `${environment.apiUrl}/${this.charactersUrl}?playerId=${playerId}`;
      return this.http.get<Character[]>(url)
        .pipe(
          catchError(this.handleError('getCharacters', []))
        );
    }

    createCharacter(): Observable<Character> {
      const url = `${environment.apiUrl}/${this.charactersUrl}`;
      return this.http.post<Character>(url, {})
      .pipe(
        catchError(this.handleError<Character>('createCharacter'))
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
      };
    }
}
