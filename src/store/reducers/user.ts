import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';
import { LocalStorage } from '../../utils/LocalStorage';

type UserData = {
  pseudo: string;
  token: string;
  logged: boolean;
};

interface UserState {
  // La donnée qui me permettra d'afficher un loader au besoin
  isLoading: boolean;
  // La donnée qui me permettra d'afficher un message d'erreur au besoin
  error?: string;
  // Les données qui seront récupérer par l'API
  pseudo?: string;
  token?: string;
  logged: boolean;

  credentials: {
    email: string;
    password: string;
  };
}
// Je vais récupérer les données de l'utilisateur dans le localStorage
const userData = LocalStorage.getItem('user');
export const initialState: UserState = {
  isLoading: false,
  logged: false,
  credentials: {
    email: 'bob@mail.io',
    password: 'bobo',
  },
  // Je déverse les données de l'utilisateur présent dans le localStorage
  ...userData,
};

type LoginCredentials = {
  email: string;
  password: string;
};
export const login = createAsyncThunk(
  'user/login',
  async (credentials: LoginCredentials) => {
    const { data } = await axiosInstance.post<UserData>('/login', credentials);

    // Lorsque je me connecte, je stocke le token d'authorization dans axios
    // Ce header sera envoyé automatiquement à chaque requête avec `axiosInstance`
    // axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    // Je vais enregistrer dans le localStorage les données de l'utilisateur
    // localStorage me permet de stocker des données dans le navigateur sous la forme de clé/valeur
    // La clé me permet de pouvoir récupérer / modifier / supprimer la valeur
    // La valeur DOIT être une chaine de caractère. On transforme donc notre objet en chaines de caractères
    LocalStorage.setItem('user', data);

    return data;
  }
);

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Je créer une traduction d'intention qui me permettra de modifier les données de mes credentials
    changeCredentialsField(
      state,
      // Cette traduction peut gérer tous les champs de mon objet credentials
      // Je dois donc préciser quel champ je veux modifier `field` et la valeur que je veux lui donner `value`
      action: PayloadAction<{
        field: 'email' | 'password';
        value: string;
      }>
    ) {
      const { field, value } = action.payload;
      state.credentials[field] = value;
    },
    logout(state) {
      // A la déconnexion, je supprime les données de l'utilisateur dans le localStorage
      LocalStorage.removeItem('user');
      state.logged = false;
      state.token = undefined;
      state.pseudo = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        // Si j'ai des erreur, je les efface
        state.error = undefined;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Identifiants incorrects';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pseudo = action.payload.pseudo;
        state.token = action.payload.token;
        state.logged = action.payload.logged;
      });
  },
});

export const { changeCredentialsField, logout } = userReducer.actions;

export default userReducer.reducer;
