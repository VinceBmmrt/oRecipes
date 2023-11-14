import Home from '../Home';
import Menu from '../Menu';
// import Recipe from '../Recipe';
// import Error from '../Error';

import Loading from './Loading';

import './App.scss';

type AppProps = {
  loading?: boolean;
}

function App({ loading }: AppProps) {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Home />
      {/* <Recipe /> */}
      {/* <Error /> */}
    </div>
  );
}

export default App;
