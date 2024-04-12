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
    private adventuresUrl = 'adventures';

    constructor(private http: HttpClient) { }

    getAdventuresByPlayerId(playerId: number): Observable<Adventure[]> {
      const url = `${environment.apiUrl}/${this.adventuresUrl}?playerId=${playerId}`;
      return this.http.get<Adventure[]>(url)
        .pipe(
          catchError(this.handleError('getAdventures', []))
        );
    }

    createAdventure(): Observable<Adventure> {
      const url = `${environment.apiUrl}/${this.adventuresUrl}`;
      return this.http.post<Adventure>(url, {})
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
