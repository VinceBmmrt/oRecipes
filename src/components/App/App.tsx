import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';

import Loading from './Loading';

import './App.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchRecipes } from '../../store/reducers/recipes';

function App() {
  // Pour emettre une action / intention j'ai besoin de récupérer dispatch
  const dispatch = useAppDispatch();

  // Lorsque mon composant se monte la 1ère fois, j'emet l'intention de récupérer les recettes
  useEffect(() => {
    // De manière général, lorsqu'on appel une API au chargement de la page, il y aura TOUJOURS un useEffect quelque part
    dispatch(fetchRecipes());
  }, [dispatch]);

  const isLoading = useAppSelector((state) => state.recipes.isLoading);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
