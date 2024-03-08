import { RootState } from '@/app/store'
import { createSlice } from '@reduxjs/toolkit'

const initialState: selectFilter = {
    closed: {
        text: 'Все',
        value: null
    },

    avatarColor: {
        value: null,
        text: 'Все'
    }
}

const isClosedSlice = createSlice({
    name: 'selectFilter',
    initialState,
    reducers: {
        selectValueClosed: (state, action) => {
            state.closed.text = action.payload.text
            state.closed.value = action.payload.value
        },

        selectValueColor: (state, action) => {
            state.avatarColor.value = action.payload.value
            state.avatarColor.text = action.payload.text
        }
    }
})

export const selectFilterClosedSelector = (state: RootState) => state.selectFilter.closed
export const selectFilterAvatarColorSelector = (state: RootState) => state.selectFilter.avatarColor

export const { selectValueClosed, selectValueColor } = isClosedSlice.actions;
export default isClosedSlice.reducer;