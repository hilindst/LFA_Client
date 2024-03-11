import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>('');

  setSearchTerm(term: string): void {
    this.searchSubject.next(term);
  }

  getSearchTerm() {
    return this.searchSubject.asObservable();
  }

  constructor() { }
}