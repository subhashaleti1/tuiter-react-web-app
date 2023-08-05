import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },
        updateTuit(state,action){
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload.id);
            console.log(index);
            state.tuits[index].likes=action.payload.likes;
            state.tuits[index].liked=action.payload.liked;

        }

    }
});

export const {createTuit,deleteTuit,updateTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;