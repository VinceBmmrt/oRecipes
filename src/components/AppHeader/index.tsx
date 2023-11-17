import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';

function AppHeader() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email="toto"
        password="tata"
        changeField={() => {}}
        handleLogin={() => {}}
        handleLogout={() => {}}
      />
    </header>
  );
}

export default AppHeader;
