import { Adventure } from "./adventure";
import { Player } from "./player";

export class Character {
  id!: number;
  name: string;
  race: string;
  charClass: string;
  alignment: string;
  level: number;
  background: string;
  gender: string;
  bio: string;
  playerId: number;
  player: Player;
  adventures: Adventure[];

  constructor(characterInfo: any) {
    this.id = characterInfo.id;
    this.name = characterInfo.name;
    this.race = characterInfo.race;
    this.charClass = characterInfo.char_class; // Mapping to Ruby's char_class attribute
    this.alignment = characterInfo.alignment;
    this.level = characterInfo.level;
    this.background = characterInfo.background;
    this.gender = characterInfo.gender;
    this.bio = characterInfo.bio;
    this.playerId = characterInfo.player_id; // Mapping to Ruby's player_id attribute
    this.player = characterInfo.player || null
    this.adventures = characterInfo.adventures || []; // Mapping to associated adventures
  }
}
