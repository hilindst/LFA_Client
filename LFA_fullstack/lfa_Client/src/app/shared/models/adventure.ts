import { Character } from "./character";
import { Player } from "./player";

export class Adventure{
  id!: number;
  title: string;
  ruleset: string;
  description: string;
  status: boolean = false;
  adventureType: string;
  setting: string;
  playerId: number;
  player: Player;
  characters: Character[];

  constructor(adventureInfo: any) {
    this.id = adventureInfo.id;
    this.title = adventureInfo.title;
    this.ruleset = adventureInfo.ruleset;
    this.description = adventureInfo.description;
    this.status = adventureInfo.status;
    this.adventureType = adventureInfo.adventure_type;
    this.setting = adventureInfo.setting;
    this.playerId = adventureInfo.player_id;
    this.player = adventureInfo.player;
    this.characters = adventureInfo.characters || [];
  }
}
