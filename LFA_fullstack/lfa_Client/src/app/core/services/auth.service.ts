import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, catchError, tap } from 'rxjs';
import { Player } from '../../shared/models/player';
import { environment } from '../../../environments/environment.development';

export interface AuthResponseData {

}

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  signOut(): void {
    console.log
  }
}
