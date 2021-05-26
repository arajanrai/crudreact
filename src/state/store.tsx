import { configureStore } from '@reduxjs/toolkit';
import { formHandler } from './reducers/FormHandler';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        formHandler: formHandler.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;