import { Adventure } from "./adventure";
import { Player } from "./player";

export class Character {
  id?: number;
  name: string;
  race: string;
  char_class: string;
  alignment: string;
  level: number;
  background: string;
  gender: string;
  bio: string;
  image?: string;
  playerId?: number;
  player?: Player;
  adventures?: Adventure[];
  created_at?: string;

  constructor(characterInfo: any) {
    this.id = characterInfo.id;
    this.name = characterInfo.name;
    this.race = characterInfo.race;
    this.char_class = characterInfo.char_class;
    this.alignment = characterInfo.alignment;
    this.level = characterInfo.level;
    this.background = characterInfo.background;
    this.gender = characterInfo.gender;
    this.bio = characterInfo.bio;
    this.playerId = characterInfo.player_id; // Mapping to Ruby's player_id attribute
    this.player = characterInfo.player || null
    this.adventures = characterInfo.adventures || []; // Mapping to associated adventures
    this.adventures = Array.isArray(characterInfo.adventures) ? characterInfo.adventures : [];
  }
}
