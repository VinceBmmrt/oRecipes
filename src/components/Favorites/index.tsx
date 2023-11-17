import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';
import { fetchFavoriteRecipes } from '../../store/reducers/recipes';

function Favorites() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.logged);
  const recipes = useAppSelector((state) => state.recipes.favorites);

  // Lorsque j'arrive sur la page, j'emet l'intention de récupérer mes recettes favorites
  useEffect(() => {
    dispatch(fetchFavoriteRecipes());
  }, [dispatch]);

  // Si je ne suis pas connecté, je redirige vers la page d'accueil
  if (!isLogged) {
    return <Navigate to="/" />;
  }
  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes favorites"
        text="On les a gardé au chaud pour vous !"
        recipes={recipes}
      />
    </Page>
  );
}

export default Favorites;
