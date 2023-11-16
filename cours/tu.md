# TU

## Installation

```bash
# Pour les tests
pnpm i -D vitest
# Pour React
jsdom  vitest-dom @testing-library/react
```

## Configuration

- [setup](/src/tests/setup.ts): Ajoute des matchers sur expect pour le DOM
- [utils](/src/tests/utils.tsx): Configuration des providers de React pour les tests
- [vitest](/vitest.config.ts): Configuration de vitest pour le setup + coverage
