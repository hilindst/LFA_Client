import { Character } from "./character";
import { Player } from "./player";

export class Adventure{
  id?: number;
  title: string;
  ruleset: string;
  description: string;
  status: boolean = false;
  adventure_type: string;
  setting: string;
  image?: string;
  playerId?: number;
  player?: Player;
  characters?: Character[];
  created_at?: string;

  constructor(adventureInfo: any) {
    this.id = adventureInfo.id;
    this.title = adventureInfo.title;
    this.ruleset = adventureInfo.ruleset;
    this.description = adventureInfo.description;
    this.status = adventureInfo.status;
    this.adventure_type = adventureInfo.adventure_type;
    this.setting = adventureInfo.setting;
    this.playerId = adventureInfo.player_id;
    this.player = adventureInfo.player;
    this.characters = Array.isArray(adventureInfo.characters) ? adventureInfo.characters : [];
  }
}
