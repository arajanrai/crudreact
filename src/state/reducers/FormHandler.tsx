import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface UserObj { name: string, email: string, age: number, phone: string };

interface UserState {
    users: UserObj[]
}

const initialState: UserState = {
    users: [],
}

export const formHandler: Slice<UserState, {
    create: (state: UserState, action: PayloadAction<UserObj>) => void;
}, "formHandler"> = createSlice({
    name: 'formHandler',
    initialState,
    reducers: {
        create: (state: UserState, action: PayloadAction<UserObj>) => {
            state.users.push(action?.payload)
        }
    },
})

export const { create } = formHandler.actions

export default formHandler.reducer