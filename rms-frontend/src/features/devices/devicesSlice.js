import { createSlice } from '@reduxjs/toolkit';

const devicesSlice = createSlice({
  name: 'devices',
  initialState: {
    devicesList: [
      { _id: 'd1', asset_id: 'a1', device_name: 'Device 1' },
      { _id: 'd2', asset_id: 'a2', device_name: 'Device 2' },
    ],
  },
  reducers: {},
});

export default devicesSlice.reducer;
