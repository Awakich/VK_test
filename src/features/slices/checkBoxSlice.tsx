import { RootState } from '@/app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: checkBox = {
    isClicked: false
}

const checkBoxSlice = createSlice({
    name: 'checkBox',
    initialState,
    reducers: {
        setClick: (state, action: PayloadAction<checkBox>) => {
            state.isClicked = action.payload.isClicked
        }
    }
})

export const checkBoxSelector = (state: RootState) => state.checkBox

export const { setClick } = checkBoxSlice.actions;
export default checkBoxSlice.reducer;