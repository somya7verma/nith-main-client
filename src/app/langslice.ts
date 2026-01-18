import { createSlice } from '@reduxjs/toolkit';

// 1. Define the initial state (like useState('en'))
const initialState = {
  value: 'en', // 'en' or 'hi'
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    // 2. Define the "setters"
    toggleLanguage: (state) => {
      state.value = state.value === 'en' ? 'hi' : 'en';
    },
    setEnglish: (state) => {
      state.value = 'en';
    },
    setHindi: (state) => {
      state.value = 'hi';
    },
  },
});

export const { toggleLanguage, setEnglish, setHindi } = languageSlice.actions;
export default languageSlice.reducer;
