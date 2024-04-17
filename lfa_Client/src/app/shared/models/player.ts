export class Player {
  id: number;
  username: string;
  email: string;
  profile: string;

  constructor(playerInfo: any) {
    this.id = playerInfo.id;
    this.username = playerInfo.username;
    this.email = playerInfo.email;
    this.profile = playerInfo.profile;
  }
}
