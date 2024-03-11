import { Injectable } from '@angular/core';
import { npc } from '../models/npc.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class NPCService {
  npcSelected = new BehaviorSubject<npc>(null);
  private user_id: string = '';
  private firebaseUrl = 'https://npc-store-1ec6a-default-rtdb.firebaseio.com/';
  private myNpcs: npc[] = [];
  npcChangeSubject = new BehaviorSubject<npc[]>(this.myNpcs);
  private unsubscribe$ = new Subject<void>();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.loginUser
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        if (user && user.id !== this.user_id) {
          this.user_id = user.id;
          this.loadNpcsFromFirebase();
        } else if (!user) {
          this.resetNpcs();
        }
      });
  }
  get npcChange$(): Observable<npc[]> {
    return this.npcChangeSubject.asObservable();
  }

  private loadNpcsFromFirebase() {
    this.http
      .get<{ [key: string]: npc }>(`${this.firebaseUrl}/npcs.json`)
      .subscribe({
        next: (res) => {
          this.myNpcs = [];
          for (const key in res) {
            if (res[key].user_id === this.user_id) {
              this.myNpcs.push({ ...res[key], id: key });
            }
          }
          this.npcChangeSubject.next(this.myNpcs);
        },
        error: (err) => console.error('Error loading NPCs', err),
      });
  }

  addNpcToFirebase(npc: npc): void {
    if (this.user_id) npc.user_id = this.user_id;
    this.http
      .post<{ name: string }>(`${this.firebaseUrl}/npcs.json`, npc)
      .subscribe({
        next: (res) => {
          npc.id = res.name;
          this.myNpcs.push(npc);
          this.npcChangeSubject.next(this.myNpcs);
        },
        error: (err) => console.error('Error adding the npc', err),
      });
  }

  updateNpcOnFirebase(updatedNpc: npc): void {
    if (updatedNpc.user_id !== this.user_id) {
      console.error('Unauthorized update attempt');
      return;
    }
    this.http
      .put<npc>(`${this.firebaseUrl}/npcs/${updatedNpc.id}.json`, updatedNpc)
      .subscribe({
        next: (res) => {
          const idx = this.myNpcs.findIndex((npc) => npc.id === updatedNpc.id);
          if (idx !== -1) {
            this.myNpcs[idx] = res;
            this.npcChangeSubject.next(this.myNpcs);
          }
        },
        error: (err) => console.error('Error updating the npc', err),
      });
  }

  deleteNpcOnFirebase(npcId: string): void {
    const npcToDelete = this.myNpcs.find((npc) => npc.id === npcId);
    if (!npcToDelete || npcToDelete.user_id !== this.user_id) {
      console.error('Unauthorized delete attempt');
      return;
    }
    this.http.delete(`${this.firebaseUrl}/npcs/${npcId}.json`).subscribe({
      next: () => {
        this.myNpcs = this.myNpcs.filter((npc) => npc.id !== npcId);
        this.npcChangeSubject.next(this.myNpcs);
      },
      error: (err) => console.error('Error deleting npc', err),
    });
  }

  private resetNpcs() {
    this.myNpcs = [];
    this.npcChangeSubject.next(this.myNpcs);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
