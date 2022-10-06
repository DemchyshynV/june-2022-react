import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    userFromAPI:null
};
const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue,dispatch, getState}) => {
        const state = getState();
        console.log(state);
        try {
            const {data} = await userService.getAll();
            dispatch(getAllWithDispatch(data))
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await userService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.users = action.payload
        // },
        getAllWithDispatch:(state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        deleteById:(state, action)=>{
            const index = state.users.findIndex(user=>user.id ===action.payload);
            state.users.splice(index, 1)
            console.log(current(state.users));

        }
    },
    // extraReducers:{
    //     [getAll.fulfilled]:(state, action)=>{
    //         state.users = action.payload
    //     },
    // }
    extraReducers: builder =>
        builder
            // .addCase(getAll.fulfilled, (state, action) => {
            //     state.users = action.payload
            //     state.loading = false
            // })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.userFromAPI = action.payload
            })
});

const {reducer: userReducer, actions: {setCurrentUser,deleteById, getAllWithDispatch}} = userSlice;

const userActions = {
    getAll,
    setCurrentUser,
    getById,
    deleteById
}

export {
    userReducer,
    userActions
}


