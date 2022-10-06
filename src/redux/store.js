import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
