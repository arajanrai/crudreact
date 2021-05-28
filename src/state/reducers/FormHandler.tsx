import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface UserObj { name: string, email: string, age: number, phone: string, id: string };

interface UserState {
    users: UserObj[]
}

const initialState: UserState = {
    users: [],
}

const idGen = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export const formHandler: Slice<UserState, {
    create: (state: UserState, action: PayloadAction<UserObj>) => void;
    updateUser: (state: UserState, action: PayloadAction<UserObj>) => void;
    deleteUser: (state: UserState, action: PayloadAction<UserObj>) => void;
}, "formHandler"> = createSlice({
    name: 'formHandler',
    initialState,
    reducers: {
        create: (state: UserState, action: PayloadAction<UserObj>) => {
            state.users.push({ ...action?.payload, id: idGen() });
        },
        updateUser: (state: UserState, action: PayloadAction<UserObj>) => {
            state.users = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload;
                } else {
                    return user;
                }
            })
        },
        deleteUser: (state: UserState, action: PayloadAction<UserObj>) => {
            state.users = state.users.filter(user => user.id !== action.payload.id);
        }
    },
})

export const { create, updateUser, deleteUser } = formHandler.actions

export default formHandler.reducer