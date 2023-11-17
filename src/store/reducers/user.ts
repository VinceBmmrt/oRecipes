import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

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
export const initialState: UserState = {
  isLoading: false,
  logged: false,
  credentials: {
    email: 'bob@mail.io',
    password: 'bobo',
  },
};

type LoginCredentials = {
  email: string;
  password: string;
};
export const login = createAsyncThunk(
  'user/login',
  async (credentials: LoginCredentials) => {
    const { data } = await axios.post<UserData>(
      'https://orecipes-api.onrender.com/api/login',
      credentials
    );

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

export const { changeCredentialsField } = userReducer.actions;

export default userReducer.reducer;
