// npc-img-select.service.ts
import { Injectable } from '@angular/core';
import { npcRace } from 'src/app/shared/models/npc.model';

@Injectable({
  providedIn: 'root'
})
export class NpcImgSelectService {

  private npcImgUrls: Record<npcRace, string[]> = {
    [npcRace.Human]: [
      'npc_human/fhuman1.jpeg',
      'npc_human/fhuman2.jpeg',
      'npc_human/fhuman3.jpeg',
      'npc_human/mhuman1.jpeg',
      'npc_human/mhuman2.jpeg',
      'npc_human/mhuman3.jpeg',
    ],

    [npcRace.Dwarf]: [
    'npc_dwarf/fdwarf1.jpeg',
    'npc_dwarf/fdwarf2.jpeg',
    'npc_dwarf/fdwarf3.jpeg',
    'npc_dwarf/mdwarf1.jpeg',
    'npc_dwarf/mdwarf2.jpeg',
    'npc_dwarf/mdwarf3.jpeg',
    ],

    [npcRace.Elf]: [
    'npc_elf/felf1.jpeg',
    'npc_elf/felf2.jpeg',
    'npc_elf/felf3.jpeg',
    'npc_elf/melf1.jpeg',
    'npc_elf/melf2.jpeg',
    'npc_elf/melf3.jpeg',
    ],

    [npcRace.Tiefling]: [
    'npc_tiefling/ftiefling1.jpeg',
    'npc_tiefling/ftiefling2.jpeg',
    'npc_tiefling/ftiefling3.jpeg',
    'npc_tiefling/mtiefling1.jpeg',
    'npc_tiefling/mtiefling2.jpeg',
    'npc_tiefling/mtiefling3.jpeg',
    ],

    [npcRace.Dragonborn]: [
    'npc_dragonborn/fdragonborn1.jpeg',
    'npc_dragonborn/fdragonborn2.jpeg',
    'npc_dragonborn/fdragonborn3.jpeg',
    'npc_dragonborn/mdragonborn1.jpeg',
    'npc_dragonborn/mdragonborn2.jpeg',
    ],

    [npcRace.HalfOrc]: [
    'npc_halfOrc/fhalforc1.jpeg',
    'npc_halfOrc/fhalforc2.jpeg',
    'npc_halfOrc/fhalforc3.jpeg',
    'npc_halfOrc/mhalforc1.jpeg',
    'npc_halfOrc/mhalforc2.jpeg',
    'npc_halfOrc/mhalforc3.jpeg',
    ],

    [npcRace.Halfling]: [
    'npc_halfling/fhalfling1.jpeg',
    'npc_halfling/fhalfling2.jpeg',
    'npc_halfling/fhalfling3.jpeg',
    'npc_halfling/mhalfling1.jpeg',
    'npc_halfling/mhalfling2.jpeg',
    'npc_halfling/mhalfling3.jpeg',
    ],

    [npcRace.Gnome]: [
    'npc_gnome/fgnome1.jpeg',
    'npc_gnome/fgnome2.jpeg',
    'npc_gnome/mgnome1.jpeg',
    'npc_gnome/mgnome2.jpeg',
    ],

    [npcRace.HalfElf]: [
      'npc_halfElf/fhalfelf1.jpeg',
      'npc_halfElf/fhalfelf2.jpeg',
      'npc_halfElf/fhalfelf3.jpeg',
      'npc_halfElf/mhalfelf1.jpeg',
      'npc_halfElf/mhalfelf2.jpeg',
      'npc_halfElf/mhalfelf3.jpeg',
    ]
  };

  // getNpcImg() {
  //   // Flatten all URL arrays into a single array
  //   const allUrls = Object.values(this.npcImgUrls).flat();

  //   // Map each URL to an object with id and url properties
  //   return allUrls.map(url => ({
  //     id: url,
  //     url: `assets/img/npc_imgFiles/${url}`,
  //   }));
  // }

  getNpcImg() {
    // Create an array that includes all images except for Half-Elf images
    const allUrls = Object.entries(this.npcImgUrls)
      .filter(([race, _]) => race !== npcRace.HalfElf) // Exclude Half-Elf images
      .flatMap(([, urls]) => urls) // Flatten the arrays of urls
      .map(url => ({
        id: url,
        url: `assets/img/npc_imgFiles/${url}`,
      }));

    return allUrls;
  }


  getRandomImageByRace(race: npcRace): string {
    let images: string[];

    if (race === npcRace.HalfElf) {
      images = [...this.npcImgUrls[npcRace.Human], ... this.npcImgUrls[npcRace.Elf]];
    } else {
      images = this.npcImgUrls[race];
    }

    const randomIndex = Math.floor(Math.random() * images.length);
    console.log(`Selected race: ${race}, images: ${images}`);
    return `assets/img/npc_imgFiles/${images[randomIndex]}`;
  }

  public getNpcImgUrls(): string[] {
    return Object.values(this.npcImgUrls).flat();
  }

};
