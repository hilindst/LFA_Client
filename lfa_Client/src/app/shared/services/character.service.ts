import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    constructor(private http: HttpClient) { }

    getCharactersByPlayerId(playerId: number): Observable<Character[]> {
      return this.http.get<Character[]>(`${environment.apiUrl}/characters/?playerId=${playerId}`)
        .pipe(
          catchError(this.handleError('getCharacters', []))
        );
    }

    createCharacter(character: Character): Observable<Character> {
      return this.http.post<Character>(`${environment.apiUrl}/characters`, character)
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
