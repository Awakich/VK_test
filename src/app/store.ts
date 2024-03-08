import { configureStore } from '@reduxjs/toolkit'
import selectFilterReducer from '@/features/slices/selectFilterSlice'
import checkBoxRedcer from '@/features/slices/checkBoxSlice'

export const store = configureStore({
    reducer: {
        selectFilter: selectFilterReducer,
        checkBox: checkBoxRedcer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch