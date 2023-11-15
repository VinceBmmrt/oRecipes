import { Outlet } from 'react-router-dom';
import Menu from '../Menu';

import Loading from './Loading';

import './App.scss';

type AppProps = {
  loading?: boolean;
};

function App({ loading }: AppProps) {
  if (loading) {
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
