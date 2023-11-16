import { describe, it, expect } from 'vitest';
import Card from './index';
// render me permet de générer le rendu de mon composant
// screen contient le rendu
import { render, screen } from '../../tests/utils';

describe('Card component', () => {
  it('Should render the card', () => {
    // Je vais générer le rendu de mon composant Card
    render(
      <Card
        difficulty="facile"
        slug="test"
        thumbnail="My thumbnail"
        title="Hello world"
      />
    );

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
