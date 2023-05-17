import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getMissions = createAsyncThunk('missions/getMissions', async () => fetch('https://api.spacexdata.com/v3/missions').then((res) => res.json()));


export default getMissions;
