
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface SearchParam {
    search: string
}

const initialState: SearchParam = {
    search: 'man'
}

const searchDataSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchKeyword : (state, action : PayloadAction<string>) => {
            state.search = action.payload
        }
    }
})

export const { searchKeyword } = searchDataSlice.actions
export default searchDataSlice.reducer