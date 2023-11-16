import { describe, expect, it } from 'vitest';
import { findRecipe } from '../recipes';
import fakeRecipes from '../../../data';

// tester findRecipe
// vérifier qu'on nous retourne un objet contenant une propriété id si on passe le premier slug
// vérifier qu'on nous retourne la première recette si on passe le premier slug
// vérifier qu'on nous retourne undefined si on passe une slug bidon

describe('findRecipe', () => {
  it('should return an object with the id property of the first slug', () => {
    // J'exécute ma fonction findRecipe avec des données de test en passant le premier slug de mes éléments.
    const recipe = findRecipe(fakeRecipes, fakeRecipes[0].slug);

    expect(recipe).toHaveProperty('id');
  });

  it('should return the first recipe if we pass the first slug', () => {
    const recipe = findRecipe(fakeRecipes, fakeRecipes[0].slug);

    expect(recipe).toEqual(fakeRecipes[0]);
  });

  it('should return undefined if we pass a wrong slug', () => {
    const recipe = findRecipe(fakeRecipes, 'wrong-slug');

    expect(recipe).toBeUndefined();
    expect(recipe).toBeTypeOf('undefined');
    expect(typeof recipe).toBe('undefined');
    expect(recipe).toBe(undefined);
  });
});
