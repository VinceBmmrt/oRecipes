import { useSelector } from 'react-redux';

import './styles.scss';

function Menu() {
  const recipes = useSelector((state: any) => state.recipes);
  return (
    <nav className="menu">
      <a
        className="menu-link menu-link--active"
        href="/"
      >
        Accueil
      </a>
      {recipes.map((recipe: any) => (
        <a
          key={recipe.id}
          className="menu-link"
          href={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </a>
      ))}
    </nav>
  );
}

export default Menu;
