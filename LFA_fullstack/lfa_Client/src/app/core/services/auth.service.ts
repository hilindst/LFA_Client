import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { environment } from '../../../environments/environment.development';
import { JwtPayload } from './jwt-payload';

@Injectable({
  providedIn: 'root',
})


export class AuthService {
  private readonly tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/login`, {
      username,
      password,
    }).pipe(
      tap(response => {
        this.setToken(response.token);
        const playerId = this.getPlayerIdFromToken(response.token); // Extract player ID from token
        // Do something with playerId (e.g., store it for later use)
      })
    );
  }

  signup(formData: any) {
    return this.http.post(`${environment.apiUrl}/players`, formData);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  getPlayerId(): number{
    const token = this.getToken();
    if (token) {
      const playerId = this.getPlayerIdFromToken(token);
      return playerId;
    }
    return 0;
  }

  private getPlayerIdFromToken(token: string): number {
    try {
      const decodedToken = jwt_decode.jwtDecode<JwtPayload>(token);
      return decodedToken.player_id;
    } catch (error) {
      console.error('Error decoding token:', error);
      return 0;
    }
  }
}
