export interface ISkillPoint {
  text: string;
  highlightedText?: string;
}

export interface ISkill {
  title: string;
  image: string;
  list: ISkillPoint[];
}

export interface ISkills {
  title: string;
  items: ISkill[];
}
