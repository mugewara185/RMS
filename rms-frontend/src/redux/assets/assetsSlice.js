import {createSlice} from '@reduxjs/toolkit';

const assetsSlice= createSlice({
    name:'assets',
    initialState:{
        assetsList:[
            {_id:'a1', asset_name:'Asset A'},
            {_id:'a2', asset_name:'Asset B'}
        ]
    },
    reducers:{}
})

export default assetsSlice.reducer;