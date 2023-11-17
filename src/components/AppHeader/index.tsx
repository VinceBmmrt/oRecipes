import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCredentialsField, login } from '../../store/reducers/user';

function AppHeader() {
  const dispatch = useAppDispatch();
  const emailValue = useAppSelector((state) => state.user.credentials.email);
  const passwordValue = useAppSelector(
    (state) => state.user.credentials.password
  );
  const handleChangeField = (value: string, name: 'email' | 'password') => {
    // J'emet l'intention de changer la valeur d'un champ
    // Le nom du champ est ma variable name, et la valeur est ma variable value
    dispatch(changeCredentialsField({ field: name, value }));
  };

  const handleLogin = () => {
    dispatch(
      login({
        email: emailValue,
        password: passwordValue,
      })
    );
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={emailValue}
        password={passwordValue}
        changeField={handleChangeField}
        handleLogin={handleLogin}
        handleLogout={() => {}}
      />
    </header>
  );
}

export default AppHeader;
