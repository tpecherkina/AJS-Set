export class Team {
  constructor() {
      this.members = new Set();
  }
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж character уже создан');
    } else {
      this.members.add(character);
    }
  }
  addAll(...character) {
    character.forEach((item) => this.members.add(item));
  }
  toArray(){
  const arrayAllMembers = Array.from(this.members);
  return arrayAllMembers;
  }
}