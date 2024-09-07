import {configureStore, createSlice} from "@reduxjs/toolkit";


const loaderSlice = createSlice({
    name:"loader",
    initialState:{loaderVal : false},
    reducers : {
        change:(state)=>{
            state.loaderVal = !state.loaderVal;
        }
    }
})

const appstore = configureStore({
    reducer:{
        loader:loaderSlice.reducer
    }
})
export const loaderActions = loaderSlice.actions
export default appstore;