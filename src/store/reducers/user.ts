import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type UserData = {
  pseudo: string;
  token: string;
  logged: boolean;
};

interface UserState {
  logged: boolean;
  credentials: {
    email: string;
    password: string;
  };
}
export const initialState: UserState = {
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
});

export const { changeCredentialsField } = userReducer.actions;

export default userReducer.reducer;
