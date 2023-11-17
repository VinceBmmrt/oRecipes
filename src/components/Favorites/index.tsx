import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';

function Favorites() {
  const isLogged = useAppSelector((state) => state.user.logged);
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
        recipes={[]}
      />
    </Page>
  );
}

export default Favorites;
