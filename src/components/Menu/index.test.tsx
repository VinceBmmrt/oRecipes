import { describe, it, expect } from 'vitest';
import Menu from './index';
import { render, screen } from '../../tests/utils';
import store from '../../store';

describe('Menu component', () => {
  it('Should render a menu with recipes', () => {
    render(<Menu />);

    const recipes = screen.getAllByRole('link');
    const nbOfRecipes = store.getState().recipes.list.length;
    expect(recipes.length).toBe(nbOfRecipes + 1);
  });
});
