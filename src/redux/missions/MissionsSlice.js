import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk('missions/getMissions', async () => fetch('https://api.spacexdata.com/v3/missions').then((res) => res.json()));
export const joinMission = createAsyncThunk('missions/joinMission', async (missionId) => missionId);

const MissionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.loading = false;
        state.missions = action.payload;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.loading = false;
        state.missions = action.payload;
      })
      .addCase(joinMission.pending, (state) => {
        state.loading = true;
      })
      .addCase(joinMission.fulfilled, (state, action) => {
        state.loading = false;
        const missionId = action.payload;
        // eslint-disable-next-line max-len
        state.missions = state.missions.map((mission) => (mission.mission_id !== missionId ? mission : { ...mission, reserved: !mission.reserved }));
      })
      .addCase(joinMission.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default MissionsSlice.reducer;
