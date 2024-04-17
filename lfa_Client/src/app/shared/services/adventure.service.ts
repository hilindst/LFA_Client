import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Adventure } from '../models/adventure';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {

    constructor(private http: HttpClient) { }

    getAdventuresByPlayerId(playerId: number): Observable<Adventure[]> {
      return this.http.get<Adventure[]>(`${environment.apiUrl}/adventures/?playerId=${playerId}`)
        .pipe(
          catchError(this.handleError('getAdventures', []))
        );
    }

    createAdventure(adventure: Adventure): Observable<Adventure> {
      return this.http.post<Adventure>(`${environment.apiUrl}/adventures`, adventure)
      .pipe(
        catchError(this.handleError<Adventure>('createAdventure'))
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
      };
    }
  }
