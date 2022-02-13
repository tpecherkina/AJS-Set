import { Team } from '../Team';

test('проверка addAll', () => {
  const team = new Team();
  const character1 = {
    name: 'Some', type: 'Some',
  };
  const character2 = {
    name: 'SomeNew', type: 'SomeNew',
  };
  const character3 = {
    name: 'SomeNewAgain', type: 'SomeNEwAgain',
  };
  team.addAll(character1, character2, character3);
  expect(team.members).toContain(character1, character2, character3);
});

test('проверка add', () => {
  const team = new Team();
  const character4 = {
    name: 'Some', type: 'Some',
  };
  
  team.add(character4);
  expect(() => team.add(character4)).toThrowError();
});

test('проверка array', () => {
  const team = new Team();
  const character = {
    name: 'Some', type: 'Some',
  };
  team.add(character)
  team.toArray();
  expect(team.members).toEqual( new Set([ { name: 'Some', type: 'Some' }]) );
});