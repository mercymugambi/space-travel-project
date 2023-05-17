import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getMissions = createAsyncThunk('missions/getMissions', async () => fetch('https://api.spacexdata.com/v3/missions').then((res) => res.json()));

const MissionsSlice = createSlice({
  name: 'missions',
  initialstate: {
    missions: [],
    loading: false,
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.loading = true;
    },
    [getMissions.fulfilled]: (state, action) => {
      state.loading = false;
      state.missions = action.payload;
    },
  },
});

export default MissionsSlice.reducer;
