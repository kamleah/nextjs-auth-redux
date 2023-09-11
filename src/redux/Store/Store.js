// "use client"
import { configureStore } from '@reduxjs/toolkit'
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import AuthSlice from '../Slice/AuthSlice';


const reducers = combineReducers({
    auth: AuthSlice
});

// const persistConfig = {
//     key: 'virtualscreening',
//     version: 1,
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    devTools: true,
    reducer: reducers,
    middleware: [thunk],
});

export default store;