// random-npc.service.ts
import { Injectable } from '@angular/core';
import { npc, role, alignment, npcClass, npcAge, gender, npcRace } from '../models/npc.model';
import { NpcImgSelectService } from '../../main-npc/add-npc/npc-img-select/npc-img-select.service';

@Injectable({
  providedIn: 'root'
})
export class RandomNpcService {

  constructor(private npcImgSelectService: NpcImgSelectService) { }

  private names: string[] = [
    'Naida', 'Zephyr', 'Maeve', 'Hawthorne', 'Quinn', 'Yseult', 'Undriel', 'Lysander', 'Jace', 'Xylia', 'Quintus', 'Willa', 'Elara',
    'Percival', 'Dahlia', 'Sylvan', 'Caspian', 'Fae', 'Cedric', 'Violet', 'Jareth', 'Quincy', 'Hazel', 'Lilith', 'Rosalie', 'Nikolai',
    'Gwyneth', 'Jasmine'
  ];

  private getRandomEnumValue<T>(enumeration: T): T[keyof T] {
    const values = Object.keys(enumeration)
      .map(k => enumeration[k])
      .filter(v => typeof v === "string") as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  }

  private getRandomName(): string {
    const randomIndex = Math.floor(Math.random() * this.names.length);
    return this.names[randomIndex];
  }

  createRandomNpc(): npc {
    const randomRace: npcRace = this.getRandomEnumValue(npcRace);
    const newNpc: npc = {
      npcName: this.getRandomName(),
      imgUrl: this.npcImgSelectService.getRandomImageByRace(randomRace),
      role: this.getRandomEnumValue(role),
      npcClass: this.getRandomEnumValue(npcClass),
      npcAge: this.getRandomEnumValue(npcAge),
      gender: this.getRandomEnumValue(gender),
      npcRace: randomRace,
      alignment: this.getRandomEnumValue(alignment),
      // location: 'Random Location',
      // description: 'Random Description',
      id: this.generateRandomId(),
      user_id: 'User-specific ID'
    };
    console.log(`Generated NPC: ${JSON.stringify(newNpc, null, 2)}`);
    return newNpc;
  }

  private generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
