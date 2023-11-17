import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {},
});

export default userReducer.reducer;
