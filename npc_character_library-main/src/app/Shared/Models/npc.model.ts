// npc.model.ts
export enum role {
  NotApplicable = 'N/A',
  Villager = 'Villager',
  Merchant = 'Merchant',
  Soldier = 'Soldier',
  Bandit = 'Bandit',
  Villain = 'Villain',
}

export enum alignment {
  NotApplicable = 'N/A',
  LawfulGood = 'Lawful Good',
  NeutralGood = 'Neutral Good',
  ChaoticGood = 'Chaotic Good',
  LawfulNeutral = 'Lawful Neutral',
  Neutral = 'Neutral',
  ChaoticNeutral = 'Chaotic Neutral',
  LawfulEvil = 'Lawful Evil',
  NeutralEvil = 'Neutral Evil',
  ChaoticEvil = 'Chaotic Evil',
}

export enum npcClass {
  NotApplicable = 'N/A',
  Barbarian = 'Barbarian',
  Bard = 'Bard',
  Cleric = 'Cleric',
  Druid = 'Druid',
  Fighter = 'Fighter',
  Monk = 'Monk',
  Paladin = 'Paladin',
  Ranger = 'Ranger',
  Rogue = 'Rogue',
  Sorcerer = 'Sorcerer',
  Warlock = 'Warlock',
  Wizard = 'Wizard',
}

export enum npcAge {
  Child = 'Child',
  Teen = 'Teen',
  Adult = 'Adult',
  Elderly = 'Elderly',
  Ageless = 'Ageless',
}

export enum gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'Non-Binary',
  NonDescript = 'Nondescript',
}

export enum npcRace {
  Dwarf = 'Dwarf',
  Elf = 'Elf',
  Halfling = 'Halfling',
  Human = 'Human',
  Dragonborn = 'Dragonborn',
  Gnome = 'Gnome',
  HalfElf = 'Half-Elf',
  HalfOrc = 'Half-Orc',
  Tiefling = 'Tiefling',
}

export interface npc {
  npcName: string;
  imgUrl: string;
  role: role;
  npcClass: npcClass;
  npcAge: npcAge;
  gender: gender;
  npcRace: npcRace;
  alignment?: alignment;
  location?: string;
  description?: string;
  id?: string;
  user_id?: string;
}
