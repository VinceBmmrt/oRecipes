import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    email: 'toto@toto.fr',
    password: 'toto',
  },
};

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
