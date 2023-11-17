import './styles.scss';
import clsx from 'clsx';
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
  const isLogged = useAppSelector((state) => state.user.logged);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const pseudo = useAppSelector((state) => state.user.pseudo);
  const error = useAppSelector((state) => state.user.error);

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
      <div
        className={clsx({
          loader: isLoading,
        })}
      >
        <LoginForm
          email={emailValue}
          password={passwordValue}
          changeField={handleChangeField}
          handleLogin={handleLogin}
          handleLogout={() => {}}
          isLogged={isLogged}
          loggedMessage={`Bonjour, toi aussi tu viens pour le donjon ${pseudo} ?`}
        />
        {error && <p className="error">{error}</p>}
      </div>
    </header>
  );
}

export default AppHeader;
