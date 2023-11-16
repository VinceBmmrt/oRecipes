import { describe, expect, it } from 'vitest';
import { sum } from './sum';

// Je regroupe mes tests dans une suite de tests
describe('sum function', () => {
  // Je créer un test, je m'attend à ce que cela fasse une somme de deux nombres
  it('should sum two numbers', () => {
    // Je m'attend à ce que la somme de 1 et 2 soit égale à 3
    expect(sum(1, 2)).toBe(3);
  });

  it('should sum two string numbers', () => {
    expect(sum('1', '2')).toBe(3);
  });

  it('should throw an error if one of the arguments is not a number', () => {
    expect(() => sum('1', 'a')).toThrowError();
    expect(() => sum('b', '1')).toThrowError();
  });
});
