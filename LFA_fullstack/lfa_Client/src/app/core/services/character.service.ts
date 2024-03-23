import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../../shared/models/character';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    private charactersUrl = 'api/characters';

    constructor(private http: HttpClient) { }

    getCharactersByPlayerId(playerId: number): Observable<Character[]> {
      const url = `${this.charactersUrl}?playerId=${playerId}`;
      return this.http.get<Character[]>(`${environment.apiUrl}/characters`)
        .pipe(
          catchError(this.handleError('getCharacters', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
      };
    }
  }
